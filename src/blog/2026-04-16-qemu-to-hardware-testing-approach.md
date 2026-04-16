---
title: "QEMU to Hardware: Our Testing Approach"
description: "How we test every commit against emulated and real hardware, from a QEMU AST2600 with virtual sensors to an HPE DL320 Gen11 in the lab."
date: 2026-04-16
author: christian
tags:
  - engineering
  - testing
---

BMC firmware has a testing problem. The software runs on constrained embedded hardware, interacts with dozens of physical sensors and buses, and controls safety-critical systems like fan speed and host power. But most OpenBMC development still follows the same pattern: build an image, flash it onto hardware, SSH in, poke around, and hope nothing regressed. There is no `npm test`. There is no CI that catches a broken Redfish route or a failed user authentication before it reaches the lab. OpenBMC has the Robot Framework test suite, but it is not integrated into upstream CI — most developers never see it run on their patches.

We built Canopy alongside FirmwareCI, so automated testing was not optional — it was built in from day one. Every commit to Canopy tests against a QEMU-emulated AST2600 running the full firmware image, and an HPE DL320 Gen11 in our lab getting its flash re-imaged on every merge to main. This post describes how that works.

## The problem with "just test on hardware"

Testing exclusively on physical hardware has obvious limitations. Hardware is scarce, flashing is slow, and the feedback loop is measured in hours rather than seconds. Worse, many regressions have nothing to do with hardware at all. A misconfigured systemd unit, a broken Redfish RBAC rule, or a D-Bus service that fails to register — these are software problems that happen to run on a BMC. You should not need a server rack to catch them.

At the same time, testing exclusively in emulation misses an entire class of problems. QEMU does not have real I2C buses, real PECI interfaces, or real power supply PMBus devices. You cannot test whether your entity-manager JSON correctly discovers an HPE GXP SoC's temperature sensors in QEMU, because those sensors do not exist there. Fan PID control is meaningless without real PWM outputs and real tachometer feedback. But you can test Redfish RBAC enforcement, user authentication, and WebUI accessibility — problems that have nothing to do with hardware.

We need both. So we built both.

## Two targets, one repository

The `canopybmc` repository defines two machine configurations. The first is `hpe-proliant-g11`, which is the production target — the actual HPE ProLiant Gen11 platform running on HPE's GXP baseboard management controller. The second is `canopy-qemu`, a machine configuration that targets the AST2600 EVB in QEMU:

```
# meta-canopy/conf/machine/canopy-qemu.conf
KERNEL_DEVICETREE = "aspeed/aspeed-ast2600-evb.dtb"
UBOOT_MACHINE = "ast2600_openbmc_spl_defconfig"
UBOOT_DEVICETREE = "ast2600-evb"
FLASH_SIZE = "65536"
PREFERRED_PROVIDER_virtual/kernel = "linux-aspeed"
```

The QEMU machine deliberately excludes the HPE GXP layers. It uses the upstream Aspeed kernel, the standard AST2600 EVB device tree, and a 64 MB SPI flash layout. This is intentional — the QEMU target is not trying to emulate the HPE hardware. It is testing the Canopy distribution layer: our distro configuration, our security hardening, our user management policies, our Redfish interface, our service stack. Everything that is not platform-specific.

Both machines share the same `canopy` distro configuration:

```
# meta-canopy/conf/distro/canopy.conf
DISTRO = "canopy"
DISTRO_NAME = "CanopyBMC (based on Phosphor OpenBMC)"
DISTROOVERRIDES .= ":canopy"
```

This means the QEMU image and the hardware image are built from the same codebase, the same package versions, and the same distro policies. When we test user RBAC enforcement in QEMU, the result applies to hardware too, because the Redfish stack, the user manager, and the access control configuration are identical.

## GitHub Actions: build both, test both

Every push to `main` and every pull request triggers two GitHub Actions workflows. Each workflow builds the firmware image on a self-hosted runner (we call these Hydra nodes), then hands the resulting `.static.mtd` binary off to FirmwareCI for testing.

The QEMU workflow is straightforward — build, upload the artifact, trigger the test pipeline:

```yaml
# .github/workflows/build-canopy-qemu.yml
jobs:
  build:
    runs-on: [self-hosted, Hydra, Large]
    steps:
      - uses: actions/checkout@v6
        with:
          submodules: recursive
      - uses: ./.github/actions/build
        with:
          board: canopy-qemu

  firmwareci:
    needs: build
    steps:
      - uses: actions/download-artifact@v8
        with:
          name: obmc-phosphor-image-canopy-qemu.static.mtd
      - uses: docker://firmwareci/action:v5.2
        with:
          WORKFLOW_NAME: ${{ secrets.FWCI_QEMU_WORKFLOW_NAME }}
          BINARIES: firmware=obmc-phosphor-image-canopy-qemu.static.mtd
```

The hardware workflow is more involved. HPE ProLiant Gen11 systems use a GXP SoC with a secure boot chain that requires signed firmware. The build step injects a signing key, and the firmware job concatenates the OpenBMC image with the GXP bootblock to produce a complete 32 MB flash image before uploading to FirmwareCI:

```yaml
# .github/workflows/build-hpe-proliant-g11.yml
- name: Prepare flash image
  run: |
    cat obmc-phosphor-image-hpe-proliant-g11.static.mtd \
        9e-gxp-dl360.rom > flash-image-hpe-proliant-g11.rom
    size=$(stat --printf='%s' flash-image-hpe-proliant-g11.rom)
    if [ "$size" -ne 33554432 ]; then
      echo "::error::Flash image size is ${size}, expected 33554432 (32MB)"
      exit 1
    fi
```

The size check is a simple guard — if the flash image is not exactly 32 MB, something went wrong in the build or the bootblock concatenation, and there is no point flashing it onto hardware.

The hardware pipeline also has a `firmwareci-main` job that only runs on pushes to `main` (not on PRs). This triggers a more comprehensive test suite that includes boot timing regressions, fan control validation, and VUART console verification — tests that take longer and exercise the physical server more aggressively.

## FirmwareCI: the test execution engine

[FirmwareCI](https://firmwareci.com) runs the tests. GitHub Actions builds the images, uploads them to FirmwareCI, and FirmwareCI handles device control, test execution, and result reporting. We define two device-under-test (DUT) configurations in the repository: `dut-canopy-qemu` and `dut-hpe-dl320`.

The QEMU DUT starts a `qemu-system-arm` process with an AST2600 EVB, forwards SSH to port 2222 and Redfish to port 2443, waits 100 seconds for boot, then runs the test suite.

The hardware DUT uses `newdutctl` to control a physical HPE DL320 Gen11 in the lab. The test sequence: power off, write the firmware image to a flash emulator connected to the server's SPI bus, power on, wait for the "Phosphor OpenBMC" boot banner on the serial console (10-minute timeout), then run the test suite. This is hardware-in-the-loop testing — the BMC boots real firmware on a real GXP SoC.

## What we test

### QEMU: 12 tests covering the platform-independent stack

The QEMU test suite validates everything that does not require real hardware. Every test connects via SSH or Redfish.

**Boot, D-Bus, networking.** Clean boot (zero failed units), core D-Bus services registered (`Inventory.Manager`, `Logging`, `Settings`), bmcweb and IPMI running, eth0 configured.

**User management.** Six tests covering CRUD operations via Redfish, RBAC enforcement (ReadOnly/Operator restrictions), password policy, session management, account limits, and root account disable/re-enable.

**Event logging and web interface.** Event creation/retrieval/deletion at all severity levels, logging service restart resilience, HTTPS connectivity, TLS validation, Redfish authentication enforcement.

### Hardware CI: 13 tests for platform-specific validation

The hardware CI test suite runs on every pull request.

**Service health and D-Bus.** 24 systemd services must start (EntityManager, CHIF, sensors, power control, bmcweb, FRU, logging, etc.). Platform-specific D-Bus names registered (`GxpChif`, `Smbios.MDR_V2`, fan/PSU/CPU sensors).

**Inventory and power control.** Host powers on via Redfish, POST completes, inventory populated (20+ sensors, CPU/DIMM/PSU data, system identity). Full power cycle: On → verify state → ForceOff → On again, console output validated at each step.

**KVM.** Video capture driver (`/dev/video0`), UDC driver, and HID gadgets (`/dev/hidg0`, `/dev/hidg1`). HID devices only appear when a VNC client connects, so the test opens a TCP connection to port 5900, waits 3 seconds for gadget binding, then checks for the devices. Userspace validation: `obmc-ikvm` service args, VNC port listening, ConfigFS configuration, bmcweb WebSocket endpoint.

**CHIF.** I2C proxy and PlatDef download handlers. Verifies BMC journal shows PlatDef extraction and I2C segment mapping at startup, host console log has zero CHIF response-format errors after POST.

### Hardware main: 8 deep tests on merge to main

**Boot time regression.** Reflash, power on, assert boot banner within 80 seconds and SSH within 25 seconds after that. Baseline: 74s to banner, 19s to SSH. Catches service dependency or kernel changes that slow boot.

**Fan control and user persistence.** PID control active, 5 PWM channels reporting 5-100% range. User creation via Redfish survives BMC power cycle (catches filesystem persistence issues).

**VUART console stack.** Full console pipeline: `obmc-console-server`, udev symlinks, Unix socket, SSH console on port 2200, log file. Power cycle host, verify log grew and contains POST output.

**VUART kernel and data path.** Driver-level validation: `ttyS3` registered as 16550A, sysfs attributes correct, raw data capture from `/dev/ttyS3` during boot (stops obmc-console, uses `dd`, verifies bytes + interrupt count + POST strings). TX path: write to `/dev/ttyVUART0` and `obmc-console-client`, confirm `/proc/tty/driver/serial` TX counter increments.

**SMBIOS and CHIF stability.** After POST, verify D-Bus objects for TPM, PCIe slots, BIOS, DIMM, CPU. Then 3 host reboot cycles via SSH, checking for zero CHIF errors, zero PlatDef errors, CHIF service never restarted.

## What this catches

In practice, the two-tier approach catches different failure modes at different stages.

The QEMU tier catches packaging errors (a recipe dropped from the image), configuration errors (a D-Bus service file with the wrong bus name), Redfish API regressions (a bmcweb change that breaks authentication), and security regressions (RBAC rules that stopped enforcing). These are typically caught on PRs, before the code ever touches hardware.

The hardware tier catches integration failures: an entity-manager JSON that does not match the actual I2C topology, a kernel driver that fails to probe on the real SoC, a fan control configuration that produces out-of-range PWM values, a VUART driver that works in isolation but breaks the console pipeline. These are caught either on PRs (the CI suite) or on merge to main (the deep suite).

The boot time regression test is worth calling out specifically. OpenBMC boot time tends to creep upward as features are added — a new service here, a new dependency there. The 80-second hard limit forces us to notice and address boot time regressions as they happen, rather than discovering months later that the BMC now takes two minutes to boot.

## What is next

We are expanding the QEMU sensor model to include more of the emulated I2C devices so we can test entity-manager discovery and dbus-sensors without hardware. We are also integrating the DMTF Redfish Service Validator into the pipeline — the storage configuration for it is already in the repository — to catch Redfish schema compliance issues automatically.

The longer-term goal is to make every test that runs on hardware also runnable in QEMU for the cases where the test is checking software behavior rather than hardware integration. The less often an engineer has to wait for a hardware flash cycle to find out their change broke something, the faster we all move.

The test definitions are all in the `canopybmc` repository under `.firmwareci/`. If you are evaluating Canopy for your platform, they serve as a concrete reference for what we validate on every commit.
