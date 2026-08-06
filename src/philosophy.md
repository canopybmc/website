---
layout: base.njk
title: "Philosophy & Approach"
description: "Understanding Canopy's dual approach to OpenBMC - balancing cutting-edge upstream tracking with enterprise stability and trust."
---

<style>
.approach-grid {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 2rem !important;
  margin: 2rem 0 !important;
  width: 100% !important;
}

@media (max-width: 768px) {
  .approach-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}
</style>

<section class="content-page">
    <div class="container">
        <header class="page-header">
            <h1>Philosophy & Approach</h1>
            <p class="page-subtitle">
                An upstream-first OpenBMC distribution focused on stability, long-term maintenance,
                testing, and developer enablement.
            </p>
        </header>

<div class="content-grid">
<article class="content-section">
<h2>Our Core Philosophy</h2>
<p>
Canopy is an <strong>upstream-first OpenBMC distribution</strong> built on four core pillars:
</p>

<ul>
<li><strong>Stability</strong> - Enterprise-grade reliability through comprehensive testing and validation</li>
<li><strong>Long-Term Maintenance</strong> - LTS branches every two years, each maintained for five with security patches and critical fixes</li>
<li><strong>Testing</strong> - Hardware CI testing on real boards for every commit</li>
<li><strong>Developer Enablement</strong> - Modern tooling and streamlined workflows to accelerate development</li>
</ul>

<p>
By staying closely aligned with OpenBMC upstream while adding robust testing and long-term support,
Canopy delivers the best of both worlds for production deployments.
</p>
</article>

<article class="content-section">
<h2>Upstream-First Approach</h2>

<div class="approach-grid">
<div class="approach-card innovation">
<div class="approach-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
</svg>
</div>
<h3>Weekly Upstream Tracking</h3>
<ul>
<li><strong>Weekly rebases</strong> against OpenBMC upstream</li>
<li><strong>Automated CI/CD</strong> testing on every rebase</li>
<li><strong>Latest features</strong> from the OpenBMC community</li>
<li><strong>Active participation</strong> in upstream development</li>
</ul>
</div>

<div class="approach-card stability">
<div class="approach-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
</svg>
</div>
<h3>Production Stability</h3>
<ul>
<li><strong>Six-month release cycles</strong> with extensive testing</li>
<li><strong>Hardware CI testing</strong> on real boards</li>
<li><strong>Long-term support (LTS)</strong> with security patches</li>
<li><strong>Predictable maintenance</strong> lifecycles</li>
</ul>
</div>
</div>
            </article>

<article class="content-section">
<h2>The Four Pillars</h2>

<div class="benefits-list">
<div class="benefit-item">
<h4>Stability</h4>
<p>Enterprise-grade reliability through comprehensive testing, validation, and six-month release cycles that provide predictable deployment schedules.</p>
</div>

<div class="benefit-item">
<h4>Long-Term Maintenance</h4>
<p>LTS branches every two years, each maintained for five years with security patches, critical bug fixes, and defined maintenance lifecycles for production environments.</p>
</div>

<div class="benefit-item">
<h4>Testing</h4>
<p>Hardware CI testing on real boards for every commit, ensuring rock-solid reliability and catching issues before they reach production.</p>
</div>

<div class="benefit-item">
<h4>Developer Enablement</h4>
<p>Modern tooling, prebuilt binaries, streamlined configuration, and comprehensive documentation that make development productive and enjoyable.</p>
</div>
</div>
</article>

<article class="content-section">
<h2>Developer Enablement</h2>
<p>
Part of our core philosophy is <strong>developer enablement</strong>. We love developers, and we are developers as well! 
We want to provide more value for developers by easing out the development process.
</p>

<p>How do we do that?</p>

<div class="developer-features">
<div class="developer-feature">
<div class="feature-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
</svg>
</div>
<h4>Extra Development Tools</h4>
<p>We provide additional tools and utilities that make OpenBMC development easier and more productive, complementing the standard upstream toolchain.</p>
</div>

<div class="developer-feature">
<div class="feature-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<circle cx="12" cy="12" r="3"/>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
</svg>
</div>
<h4>Streamlined Configuration</h4>
<p>We streamline the OpenBMC configuration process to make customization easier, reducing complexity and setup time for new projects.</p>
</div>

<div class="developer-feature">
<div class="feature-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z"/>
<path d="m3.3 7 8.7 5 8.7-5"/>
<path d="M12 22V12"/>
</svg>
</div>
<h4>Prebuilt Binaries</h4>
<p>We provide prebuilt binaries for supported boards to lower the barrier to entry and reduce the time needed to get started with development.</p>
</div>

<div class="developer-feature">
<div class="feature-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<rect x="2" y="3" width="6" height="6" rx="1"/>
<rect x="16" y="3" width="6" height="6" rx="1"/>
<rect x="9" y="15" width="6" height="6" rx="1"/>
<path d="M5 9v3a3 3 0 0 0 3 3h1"/>
<path d="M19 9v3a3 3 0 0 1-3 3h-1"/>
<path d="M12 15V9"/>
</svg>
</div>
<h4>Automation</h4>
<p>We provide a fully automated CI/CD pipeline as part of our weekly rebase against <a href="https://www.github.com/openbmc/openbmc" target="_blank">upstream</a>. Let's use 21st century development tools to make our life easier.</p>
</div>
</div>

</article>

<article class="content-section">
<h2>Release Channels</h2>
<p>
The same curated tree is delivered through three channels, so each part of your organization can pick
the balance of freshness and stability it needs:
</p>
<div class="channels-grid">
<div class="channel-card edge">
<div class="channel-head">
<h3>Bleeding Edge</h3>
<code>main</code>
</div>
<p class="channel-tagline">Newest of everything, integrated continuously.</p>
<div class="channel-spectrum">
<span>Fresh</span>
<div class="channel-track"><span class="channel-dot" style="left: 12%"></span></div>
<span>Stable</span>
</div>
<ul>
<li>Tracks upstream <strong>main</strong> with weekly rebases, plus in-flight and vendor patches</li>
<li>Freshest features, least hardening</li>
</ul>
<div class="channel-for"><strong>For:</strong> active development, early board bring-up and feature preview.</div>
</div>
<div class="channel-card rolling">
<div class="channel-head">
<h3>Rolling Release</h3>
<code>every 6 months</code>
</div>
<p class="channel-tagline">A stabilised snapshot on a fixed cadence.</p>
<div class="channel-spectrum">
<span>Fresh</span>
<div class="channel-track"><span class="channel-dot" style="left: 50%"></span></div>
<span>Stable</span>
</div>
<ul>
<li>Tagged source with <strong>release notes and a hardware test report</strong></li>
<li>Bug and security fixes between releases</li>
</ul>
<div class="channel-for"><strong>For:</strong> the standard production cadence.</div>
</div>
<div class="channel-card lts">
<div class="channel-head">
<h3>LTS Release</h3>
<code>every 2 years</code>
</div>
<p class="channel-tagline">A release promoted to long-term support.</p>
<div class="channel-spectrum">
<span>Fresh</span>
<div class="channel-track"><span class="channel-dot" style="left: 88%"></span></div>
<span>Stable</span>
</div>
<ul>
<li><strong>Security and critical fixes only</strong>, backported for 5 years</li>
<li>No feature churn &mdash; API and behaviour held stable</li>
</ul>
<div class="channel-for"><strong>For:</strong> fleets that need stability and compliance over new features.</div>
</div>
</div>
</article>

<article class="content-section">
<h2>Long-Term Support and Migration</h2>
<p>
A new LTS branch is cut every two years and maintained for five. Migration between branches is part of
the support model rather than an afterthought, so a product stays supported as long as it needs to be:
</p>
<div class="lts-path">
<div class="lts-pill">
<strong>LTS 2026.12</strong>
<span>5 years of fixes</span>
</div>
<div class="lts-arrow"><span>migrate on your schedule</span></div>
<div class="lts-pill future">
<strong>LTS 2028.12</strong>
<span>5 years of fixes</span>
</div>
<div class="lts-arrow"><span>migrate on your schedule</span></div>
<div class="lts-pill future">
<strong>LTS 2030.12</strong>
<span>5 years of fixes</span>
</div>
</div>
<div class="migration-grid">
<div class="migration-card">
<h3>Five years per branch</h3>
<p>Every LTS branch carries security patches and critical fixes for <strong>5 years</strong>, and a new branch appears every two years &mdash; so there is always a maintained branch ahead of the one you are on.</p>
</div>
<div class="migration-card">
<h3>We carry the migration</h3>
<p>When you do move, we rebase the platform onto the new LTS. <strong>Vendor patches are carried forward</strong>, and anything already upstreamed arrives with the new base for free &mdash; so the delta you carry shrinks every cycle.</p>
</div>
<div class="migration-card">
<h3>Proven by regression</h3>
<p>The hardware regression suite runs on the new branch before you switch, <strong>proving functional parity on your boards</strong> rather than asserting it.</p>
</div>
<div class="migration-card">
<h3>Never a support cliff</h3>
<p>Because LTS branches overlap, there is always a maintained branch to move onto. <strong>Production never runs on an unmaintained tree.</strong></p>
</div>
</div>
</article>

<article class="content-section">
<h2>Enterprise Use Cases</h2>
<p>
This philosophy specifically addresses the needs of enterprise environments that require:
</p>

<ul class="enterprise-needs">
<li><strong>Predictable Release Cycles</strong> - Plan deployments around our six-month stable release schedule</li>
<li><strong>Validation and Testing</strong> - Comprehensive testing ensures compatibility and reliability</li>
<li><strong>Security Assurance</strong> - Regular security audits and timely patch delivery</li>
<li><strong>Support Commitments</strong> - Long-term support with defined service level agreements</li>
<li><strong>Documentation</strong> - Thorough documentation for deployment, configuration, and troubleshooting</li>
<li><strong>Migration Paths</strong> - Clear upgrade paths between releases with migration guides</li>
</ul>
</article>

<article class="content-section">
<h2>Upstream-First Commitment</h2>
<p>
Our upstream-first philosophy ensures Canopy remains closely aligned with the OpenBMC community:
</p>

<ul>
<li><strong>Weekly rebases</strong> ensure we never drift from upstream</li>
<li><strong>Contributions flow back</strong> to OpenBMC from our testing and validation work</li>
<li><strong>Bug fixes and improvements</strong> are shared with the broader community</li>
<li><strong>Active participation</strong> in OpenBMC development and technical discussions</li>
<li><strong>Community-driven</strong> development while maintaining production stability</li>
</ul>
</article>
        </div>
    </div>
</section>
