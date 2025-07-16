---
layout: base.njk
title: "Open Firmware, Open Future"
description: "Canopy is an open-source firmware platform focused on security, transparency, and developer experience."
---

<section class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">Open Firmware, Open Future</h1>
            <p class="hero-subtitle">
                Canopy is an open-source firmware platform that prioritizes security, 
                transparency, and developer experience. Build on top of <a href="https://github.com/openbmc/openbmc">openBMC</a>.
            </p>
            <div class="hero-actions">
                <a href="/docs" class="btn btn-primary">Get Started</a>
                <a href="https://github.com/canopy-project" class="btn btn-secondary" target="_blank" rel="noopener">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                </a>
            </div>
        </div>
        
        <div class="hero-visual">
            <div class="hero-graphic">
                <div class="firmware-layers">
                    <div class="layer layer-1">Application</div>
                    <div class="layer layer-2">Kernel</div>
                    <div class="layer layer-3">Bootloader</div>
                    <div class="layer layer-4">Hardware</div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="why-canopy">
    <div class="container">
        <h2 class="section-title">Why Canopy?</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                </div>
                <h3>Security</h3>
                <p>
                    Built with security-first principles. Verified boot chains, 
                    cryptographic signatures, and transparent security practices 
                    protect your devices from threats.
                </p>
            </div><div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                </div>
                <h3>Transparency</h3>
                <p>
                    Every component is open source and auditable. 
                    No black boxes, no hidden backdoors. 
                    You can verify exactly what's running on your hardware.
                </p>
            </div><div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                </div>
                <h3>Developer-first</h3>
                <p>
                    Modern tooling, comprehensive documentation, and 
                    intuitive APIs make firmware development productive 
                    and enjoyable for developers at every level.
                </p>
            </div><div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                </div>
                <h3>Six month release cycle</h3>
                <p>
                    Canopy sticks to a fixed release cycle. No matter what.
                </p>
            </div><div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7zM11 5h2v4h-2V5z"/>
                    </svg>
                </div>
                <h3>Pre-build Binaries</h3>
                <p>
                    Canopy provides pre-build binaries for a variaty of supported hardware. Easy
                    to get started - flash it and you're ready to go
                </p>
            </div><div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3l4-4 4 4v3h5v-5h-4zM12 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 19H5v-1h2v1zm10 0h-2v-1h2v1z"/>
                    </svg>
                </div>
                <h3>Hardware CI</h3>
                <p>
                    Canopy does more. We test every commit on real hardware, providing rock-solid stability.
                </p>
            </div>
        </div>
    </div>
</section>