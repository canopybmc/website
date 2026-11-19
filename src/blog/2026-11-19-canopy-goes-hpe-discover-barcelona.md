---
title: "Canopy goes HPE Discover Barcelona"
description: "CanopyBMC is at HPE Discover Barcelona 2026 on December 2–3 at Fira Barcelona Gran Via: open, upstream-aligned OpenBMC firmware for HPE ProLiant Gen11 servers."
date: 2026-11-19
author: christian
tags:
  - announcement
  - events
---

Canopy is coming to [HPE Discover Barcelona 2026](https://www.hpe.com/discover) on December 2–3 at Fira Barcelona Gran Via, Spain. If you scanned the QR code at the event: welcome! This page gives you the short version of what Canopy is and where to go next.

## What is Canopy?

**CanopyBMC** is 9elements' stable OpenBMC distribution. It gives server operators an open, auditable and long-term supported alternative to proprietary BMC firmware, built on the standard upstream OpenBMC stack.

Our first production target is the **HPE ProLiant Gen11** platform on HPE's GXP BMC SoC. Canopy runs on real Gen11 servers in our lab, and every merge to main is flashed onto one and tested automatically.

## Canopy on HPE ProLiant Gen11

What runs on Gen11 today:

- **One image for 12+ Gen11 SKUs**, with runtime device tree overlay selection per baseboard variant
- **Sensors and thermal control:** PSU, CPU and DIMM temperatures, NVMe drives, and PID-controlled fans
- **BIOS communication** through a clean-room CHIF implementation: SMBIOS transfer, persistent configuration and BIOS event logging
- **Full Redfish API** and a Canopy-branded web interface
- **A modern Linux kernel** (6.18), with our patches written to upstream standards

Everything is upstream-aligned: entity-manager for hardware discovery, dbus-sensors for monitoring and the standard OpenBMC service stack.

## Releases and long-term support

[Canopy 2026.04](/releases/) is our first stable release for HPE ProLiant Gen11. Release candidates for 2026.06 are available, and **2026.12 is planned as the next LTS release**. See the [releases page](/releases/) for channels and support windows, and the [boards page](/boards/) for supported hardware.

## Come talk to us

Meet us at HPE Discover Barcelona and talk to us about OpenBMC on ProLiant, open firmware in production, long-term support, or getting Canopy running on your platform. Can't make it? [Get in touch](https://9elements.com/contact) any time.
