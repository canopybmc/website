---
title: "Why We Are Building Canopy"
description: "Server firmware shouldn't be a black box. We are building an open-source BMC firmware platform on OpenBMC — here is where we are and where we are heading."
date: 2026-03-17
author: christian
tags:
  - announcement
  - engineering
---

Every server has a small computer inside it that most people never think about. The Baseboard Management Controller — the BMC — is responsible for monitoring hardware health, controlling fans, reading temperatures, managing power, and providing remote access. It runs its own operating system, has its own network stack, and it boots before the host CPU even powers on. If you have ever used iLO, iDRAC, or any other out-of-band management interface, you have talked to a BMC.

The problem is that this critical piece of infrastructure is almost entirely proprietary. The firmware running on your BMC is a black box, written by your server vendor, with no source code, no ability to audit, and no way to fix bugs yourself. You get what the vendor ships, on their schedule, with their priorities.

We think that needs to change.

## What Canopy is

Canopy is an open-source BMC firmware distribution built on [OpenBMC](https://github.com/openbmc/openbmc). We take upstream OpenBMC, add long-term support, hardware CI testing on real servers, and the integration work needed to run on production platforms.

Our first target is the HPE ProLiant Gen11 platform — specifically the DL360, DL380, and related SKUs running on HPE's GXP SoC. We chose this platform because it is widely deployed, the hardware is capable, and there is real demand for an open firmware alternative.

We are not a fork. We track OpenBMC upstream weekly, rebase continuously, and contribute fixes back. The goal is to stay as close to upstream as possible while providing what upstream alone does not: tested releases, long-term maintenance, and production readiness for specific hardware.

## Where we are today

Canopy is running on real hardware. Not in simulation, not "coming soon" — on actual HPE ProLiant Gen11 servers in our lab. Here is what works today:

- **Multi-platform support** for 12+ Gen11 SKUs, with runtime device tree overlay selection so a single image supports multiple baseboard variants
- **PSU monitoring** with a custom `gxp-psu` hwmon driver we wrote from scratch — 8 sensor channels per power supply (voltage, current, power, temperature, fan speed)
- **CPU and DIMM temperatures** via Intel PECI and AMD SBTSI
- **Fan control** with PID thermal regulation through phosphor-pid-control — 7 fans, with GPIO-based presence and fault detection
- **Host power control** via x86-power-control with platform-specific GPIO timing
- **BIOS communication** through a clean-room CHIF implementation — SMBIOS table transfer, persistent configuration storage, and BIOS event logging
- **Full Redfish API** for remote management, plus a Canopy-branded web interface
- **NVMe drive monitoring** with temperature and FRU data for Samsung, SK hynix, and Micron drives
- **67 kernel patches** on Linux 6.18, carrying a modern kernel on a platform that was originally shipping with 5.10

All of this is upstream-aligned. We use entity-manager for hardware discovery, dbus-sensors for monitoring, and the standard OpenBMC service stack. Where we had to write kernel drivers — like the PSU monitoring driver and the POST code capture driver — we followed upstream coding standards and ran `checkpatch.pl --strict` before every commit.

## Where we are heading

The work so far covers the basics. Servers boot, sensors report, fans spin at the right speed, and you can manage the machine over Redfish. But there is more to do:

- **KVM / remote console** — porting the GXP video capture driver to the 6.18 kernel so you can see the host display remotely
- **IPMI in-band and over LAN** — because a lot of existing tooling still depends on it
- **BIOS firmware update** via Redfish — flashing host firmware from the BMC
- **BMC health monitoring** — tracking the BMC's own CPU, memory, and storage usage

Further out, we want to expand to additional server platforms and processor architectures. The meta-layer approach makes this practical — the platform-specific configuration lives in JSON and device tree overlays, not in code forks.

## Why a blog

BMC firmware is one of those areas where the gap between "how things actually work" and "what is publicly documented" is enormous. If you have ever tried to understand how a baseboard management controller discovers hardware, how fan PID loops are tuned, or how the BMC talks to the host BIOS during POST, you know the pain. The information either does not exist, is locked behind vendor NDAs, or is scattered across mailing list archives.

This blog is where we will share what we learn — real code, real configs, and the engineering decisions behind them. You can follow along via [RSS](/feed.xml).

We are building Canopy because we believe server firmware should be open, auditable, and fixable. If that matters to you too, stick around.
