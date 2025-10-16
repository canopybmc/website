---
layout: base.njk
title: "Open. Stable. Ready."
description: "Canopy is an open-source firmware platform focused on security, transparency, and developer experience."
---

<section class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">{{ hero.title }}</h1>
            <p class="hero-subtitle">
                {{ hero.subtitle.text }}
            </p>
            <div class="hero-actions">
                <a href="{{ hero.primaryButton.url }}" class="btn btn-primary">{{ hero.primaryButton.text }}</a>
                <a href="{{ hero.secondaryButton.url }}" class="btn btn-secondary" target="_blank" rel="noopener">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {{ hero.secondaryButton.text }}
                </a>
            </div>
        </div>
        <div class="hero-visual">
            <div class="hero-rings">
                <div style="position: relative; width: 400px; height: 400px;">
                    <!-- Ring 4 (outermost) -->
                    <svg style="position: absolute; top: 0; left: 0;" viewBox="0 0 400 400" width="400" height="400">
                        <circle cx="200" cy="200" r="140" fill="none" stroke="#6C4AB6" stroke-width="2"
                                stroke-dasharray="20,10" class="ring ring-4"/>
                    </svg>
                    <!-- Ring 3 -->
                    <svg style="position: absolute; top: 0; left: 0;" viewBox="0 0 400 400" width="400" height="400">
                        <circle cx="200" cy="200" r="110" fill="none" stroke="#B983FF" stroke-width="2"
                                stroke-dasharray="15,8" class="ring ring-3"/>
                    </svg>
                    <!-- Ring 2 -->
                    <svg style="position: absolute; top: 0; left: 0;" viewBox="0 0 400 400" width="400" height="400">
                        <circle cx="200" cy="200" r="80" fill="none" stroke="#6C4AB6" stroke-width="2"
                                stroke-dasharray="12,6" class="ring ring-2"/>
                    </svg>
                    <!-- Ring 1 (innermost) -->
                    <svg style="position: absolute; top: 0; left: 0;" viewBox="0 0 400 400" width="400" height="400">
                        <!-- Background fill circle -->
                        <circle cx="200" cy="200" r="48" fill="#614C9A" stroke="none"/>
                        <!-- Dashed border circle -->
                        <circle cx="200" cy="200" r="50" fill="none" stroke="#B983FF" stroke-width="2"
                                stroke-dasharray="8,4" class="ring ring-1-static"/>
                        <!-- Favicon in center -->
                        <image x="175" y="175" width="50" height="50" href="/assets/images/favicon.svg"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="why-canopy">
    <div class="container">
        <h2 class="section-title">{{ features.title }}</h2>
        <div class="features-grid">
            {%- for feature in features.items -%}
            <div class="feature-card">
                <div class="feature-icon">
                    {%- assign icon_filename = feature.title | downcase | replace: " ", "-" -%}
                    <img src="/assets/icons/{{ icon_filename }}.svg" alt="{{ feature.altText }}" width="48" height="48">
                </div>
                <h3>{{ feature.title }}</h3>
                <p>
                    {{ feature.description }}
                </p>
            </div>
            {%- endfor -%}
        </div>
    </div>
</section>

<section class="release-strategy">
    <div class="container">
        <h2 class="section-title">Release Strategy</h2>
        <p class="section-subtitle">Rolling releases every 6 months with LTS support every 4th release</p>

        <div class="release-timeline-diagram">
            <div class="timeline-track">
                <div class="release-node lts">
                    <div class="node-circle"></div>
                    <div class="node-label">2026.02</div>
                    <div class="node-type">LTS</div>
                    <div class="lts-branch"></div>
                </div>

                <div class="release-connector"></div>

                <div class="release-node rolling">
                    <div class="node-circle"></div>
                    <div class="node-label">2026.08</div>
                    <div class="node-type">Rolling</div>
                </div>

                <div class="release-connector"></div>

                <div class="release-node rolling">
                    <div class="node-circle"></div>
                    <div class="node-label">2027.02</div>
                    <div class="node-type">Rolling</div>
                </div>

                <div class="release-connector"></div>

                <div class="release-node rolling">
                    <div class="node-circle"></div>
                    <div class="node-label">2027.08</div>
                    <div class="node-type">Rolling</div>
                </div>

                <div class="release-connector"></div>

                <div class="release-node lts future">
                    <div class="node-circle"></div>
                    <div class="node-label">2028.02</div>
                    <div class="node-type">LTS</div>
                    <div class="lts-branch"></div>
                </div>

                <div class="release-connector"></div>

                <div class="release-node rolling future">
                    <div class="node-circle"></div>
                    <div class="node-label">2028.08</div>
                    <div class="node-type">Rolling</div>
                </div>
            </div>
        </div>

        <div class="release-legend">
            <div class="legend-item">
                <div class="legend-icon rolling-icon"></div>
                <div class="legend-text">
                    <strong>Rolling Release</strong>
                    <span>6-month support with latest features</span>
                </div>
            </div>
            <div class="legend-item">
                <div class="legend-icon lts-icon"></div>
                <div class="legend-text">
                    <strong>LTS Release</strong>
                    <span>10+ year support with security patches</span>
                </div>
            </div>
        </div>
    </div>
</section>
