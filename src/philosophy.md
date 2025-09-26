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
                Canopy bridges the gap between cutting-edge innovation and enterprise stability, 
                providing the best of both worlds for OpenBMC deployments.
            </p>
        </header>

<div class="content-grid">
<article class="content-section">
<h2>Our Core Philosophy</h2>
<p>
The idea of Canopy is to provide a <strong>stable baseline for OpenBMC</strong>. We believe that enterprise 
environments need both the latest innovations from the OpenBMC community and the reliability 
that comes with extensive testing and long-term support.
</p>

<p>
Rather than forcing organizations to choose between innovation and stability, Canopy delivers both 
through a carefully balanced dual approach to release management and upstream integration.
</p>
</article>

<article class="content-section">
<h2>The Dual Approach</h2>

<div class="approach-grid">
<div class="approach-card stability">
<div class="approach-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
</svg>
</div>
<h3>Stability & Trust</h3>
<ul>
<li><strong>Six-month release cycles</strong> with extensive testing</li>
<li><strong>Enterprise-grade stability</strong> through comprehensive validation</li>
<li><strong>Long-term support (LTS)</strong> for production deployments</li>
<li><strong>Rigorous quality assurance</strong> before each release</li>
</ul>
</div>

<div class="approach-card innovation">
<div class="approach-icon">
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
</svg>
</div>
<h3>Cutting-Edge Innovation</h3>
<ul>
<li><strong>Weekly rebases</strong> to track OpenBMC upstream closely</li>
<li><strong>Full testing</strong> on weekly builds for rapid feedback</li>
<li><strong>Latest features</strong> from the OpenBMC community</li>
<li><strong>Continuous integration</strong> with upstream developments</li>
</ul>
</div>
</div>
            </article>

<article class="content-section">
<h2>Best of Both Worlds</h2>
<p>
This dual approach means Canopy users benefit from:
</p>

<div class="benefits-list">
<div class="benefit-item">
<h4>🚀 Innovation Without Risk</h4>
<p>Access the latest OpenBMC features and improvements without compromising system stability.</p>
</div>

<div class="benefit-item">
<h4>🛡️ Enterprise Confidence</h4>
<p>Deploy with confidence knowing each release undergoes extensive testing and validation.</p>
</div>

<div class="benefit-item">
<h4>🔄 Flexible Deployment Options</h4>
<p>Choose between stable releases for production or weekly builds for development and testing.</p>
</div>

<div class="benefit-item">
<h4>📈 Long-term Support</h4>
<p>Benefit from LTS releases that provide security updates and critical fixes over extended periods.</p>
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
<p>We provide a fully automated CI/CD pipeline as part of our weekly rebase against <a href="https://www.github.com/openbmc/openbmc" target="_blank">upstream</a>. Let's use 21th century development tools to make our life easier.</p>
</div>
</div>

</article>

<article class="content-section">
<h2>Release Strategy</h2>
<p>
Our release strategy is designed to serve different use cases within your organization:
</p>

<div class="release-timeline">
<div class="timeline-item">
<div class="timeline-marker daily"></div>
<div class="timeline-content">
<h4>Weekly Builds</h4>
<p>Automatic rebases from OpenBMC upstream with basic smoke testing. Perfect for development, early testing, and staying current with the latest features.</p>
</div>
</div>

<div class="timeline-item">
<div class="timeline-marker stable"></div>
<div class="timeline-content">
<h4>Stable Releases (Every 6 Months)</h4>
<p>Thoroughly tested releases that undergo extensive validation, security audits, and compatibility testing. Ideal to build your solution on top.</p>
</div>
</div>

<div class="timeline-item">
<div class="timeline-marker lts"></div>
<div class="timeline-content">
<h4>LTS Support</h4>
<p>Extended support for stable releases with security patches, critical bug fixes, and enterprise-level support commitments.</p>
</div>
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
<h2>Community Connection</h2>
<p>
While Canopy provides enterprise stability, we remain deeply connected to the OpenBMC community:
</p>

<ul>
<li>Weekly upstream tracking ensures we don't drift from the community</li>
<li>Contributions flow back to OpenBMC from our testing and validation work</li>
<li>Bug fixes and improvements are shared with the broader community</li>
<li>We participate actively in OpenBMC governance and technical discussions</li>
</ul>
</article>
        </div>
    </div>
</section>
