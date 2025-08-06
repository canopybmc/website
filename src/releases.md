---
layout: base.njk
title: "Releases"
description: "Download the latest Canopy firmware releases and view release notes for all versions."
templateEngineOverride: njk,md
---

<div class="content-page">

# Releases

## Current Release

{% if releases.current %}

<div class="release-card current-release">
    <div class="release-header">
        <h3>{{ releases.current.version }} - {{ releases.current.codename }}</h3>
        <span class="release-status status-{{ releases.current.status | lower | replace(' ', '-') }}">{{ releases.current.status }}</span>
    </div>
    <div class="release-info">
        <p class="release-description">{{ releases.current.description }}</p>
        <div class="release-meta">
            <span class="release-date">Released: {{ releases.current.release_date }}</span>
            <span class="commit-info">
                Commit: <a href="https://github.com/canopybmc/openbmc/commit/{{ releases.current.commit }}" target="_blank" rel="noopener">
                    <code>{{ releases.current.commit }}</code>
                </a>
            </span>
            <span class="validation-status">{% if releases.current.validation_status == "validated" %}✓ Validated{% elif releases.current.validation_status == "not_validated" %}❌ Not Validated{% else %}⏳ Validation In Progress{% endif %}</span>
        </div>
        <div class="release-actions">
            <a href="{{ releases.current.github_url }}" class="release-btn primary" target="_blank" rel="noopener">
                📦 Download Release
            </a>
            <a href="/boards" class="release-btn secondary">
                🔍 View Supported Boards
            </a>
        </div>
    </div>
</div>
{% else %}
<div class="releases-notice">
    <div class="notice-icon">
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
    </div>
    <div class="notice-content">
        <h2>Coming Soon</h2>
        <p>We are currently preparing for our first official release. Stay tuned for updates!</p>
        <p>Follow our progress on <a href="https://github.com/canopybmc" target="_blank" rel="noopener">GitHub</a> or join our community discussions to be notified when the first release is available.</p>
    </div>
</div>
{% endif %}

---

## Release History

{% if releases.items and releases.items.length > 0 %}

<div class="release-history">
{% for release in releases.items %}
<div class="release-card">
    <div class="release-header">
        <h4>{{ release.version }} - {{ release.codename }}</h4>
        <span class="release-status status-{{ release.status | lower | replace(' ', '-') }}">{{ release.status }}</span>
    </div>
    <div class="release-info">
        <p class="release-description">{{ release.description }}</p>
        <div class="release-meta">
            <span class="release-date">Released: {{ release.release_date }}</span>
            <span class="commit-info">
                Commit: <a href="https://github.com/canopybmc/openbmc/commit/{{ release.commit }}" target="_blank" rel="noopener">
                    <code>{{ release.commit }}</code>
                </a>
            </span>
            <span class="validation-status">{% if release.validation_status == "validated" %}✓ Validated{% elif release.validation_status == "not_validated" %}❌ Not Validated{% else %}⏳ Validation In Progress{% endif %}</span>
        </div>
        <div class="release-actions">
            <a href="{{ release.github_url }}" class="release-btn primary" target="_blank" rel="noopener">
                📦 View Release
            </a>
        </div>
    </div>
</div>
{% endfor %}
</div>

{% endif %}

---

## What to Expect

When releases become available, you'll find:

- **Pre-built binaries** for all [supported boards](/boards) (built automatically via GitHub Actions)
- **Release notes** with detailed changelog and upgrade instructions
- **Source code** packages for building from source
- **Documentation** specific to each release version
- **Security advisories** and patch information

---

## Supported Hardware

Canopy will initially support a variety of server and embedded hardware platforms. See our [supported boards page](/boards) for the complete list of validated devices with feature matrices and validation status.

---

## Release Schedule

Following our **six-month release cycle**, we plan to deliver:

- Regular feature releases every 6 months
- Security patches and critical bug fixes as needed
- Pre-release builds for testing and development

---

## Stay Updated

- **GitHub**: [https://github.com/canopybmc](https://github.com/canopybmc)
- **Discussions**: [https://github.com/canopybmc/discussions](https://github.com/canopybmc/discussions)
- **Security**: [https://github.com/canopybmc/security](https://github.com/canopybmc/security)

</div>
