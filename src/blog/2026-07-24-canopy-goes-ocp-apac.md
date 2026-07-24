---
title: "Canopy goes OCP APAC - Our Demos explained!"
description: "We are bringing CanopyBMC to the OCP APAC Summit in Taipei — Altera OmniMC on Agilex 3 and a full open firmware stack on the ASPEED AST2700 DCSCM at booth PL07."
date: 2026-07-24
author: christian
tags:
  - announcement
  - events
---

We are excited to announce that Canopy is coming to the [OCP APAC Summit](https://www.opencompute.org/summit/2026-ocp-apac-summit) on August 11–12, 2026 at TaiNEX 2 in Taipei City, Taiwan. You will find us at **booth PL07**, where we will be showing CanopyBMC in two live demos: the Altera OmniMC platform on Agilex 3, and a full open firmware stack on the ASPEED AST2700 DCSCM with coreboot on the host.

This post walks through the demos we are bringing and what you can expect to see at the booth.

## Altera OmniMC × CanopyBMC

The **Altera OmniMC × CanopyBMC** demo explores how an Agilex 3 device can serve as a flexible management controller for a wide range of infrastructure systems.

For the demonstration, an Agilex 3 reference board is connected to a small add-on board that emulates a managed host. The add-on provides several sensors and a controllable fan, allowing the management stack to demonstrate hardware monitoring, telemetry collection and fan control.

The HPS runs **CanopyBMC**, 9elements' stable OpenBMC distribution, while the FPGA fabric remains available for application-specific logic. This allows the platform to be adapted to customer requirements without having to redesign the complete management architecture.

The name **OmniMC** reflects the intended flexibility of the platform. Depending on the implementation, it can operate as a management controller for:

* Servers and appliances as a conventional BMC
* Coolant distribution units
* Power shelves
* Other specialized infrastructure
* An entire rack as a rack management controller

By combining a Linux-based management stack with adaptable FPGA logic, OmniMC provides a common foundation for both standard platform-management functions and highly specialized control interfaces.

## AST2700 DCSCM × CanopyBMC × coreboot

The second demo presents **CanopyBMC running on the ASPEED AST2700 DCSCM reference platform**, connected to an Alder Lake single-board computer using coreboot as its host firmware.

The demonstration shows that CanopyBMC supports ASPEED's latest BMC silicon and operates correctly within the DCSCM form factor. It also highlights 9elements' ability to support the complete platform firmware stack: from the management controller and OpenBMC environment through to the host firmware running on the main processor.

Using coreboot on the Alder Lake host makes it possible to demonstrate direct cooperation between independently developed BMC and host firmware components. This provides a foundation for tighter integration, improved platform initialization and more transparent management communication across the complete system.

The next development steps include deeper coreboot integration within CanopyBMC and support for **OpenPRoT** on the DCSCM root-of-trust device. For the current demonstration, the RoT is running ASPEED's reference firmware stack.

Together, the demo components show a practical path toward an open and maintainable firmware architecture covering the BMC, host firmware and platform root of trust.

## Come talk to us

If you are attending the summit, stop by booth PL07 and say hello. We are happy to talk about OpenBMC, open firmware on production servers, long-term support, or how to get Canopy running on your platform.
