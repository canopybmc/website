---
layout: base.njk
title: "Supported Boards"
description: "Hardware platforms validated and supported by Canopy firmware with feature matrix and validation status."
---

<div class="content-page">

# {{ boards.title }}

{{ boards.description }}

---

## Supported Hardware Platforms

The following boards are currently supported by Canopy firmware:

<div class="boards-table-wrapper">
    <table class="boards-table">
        <thead>
            <tr>
                <th>Board Name</th>
                <th>Vendor</th>
                <th>Model</th>
                <th>Status</th>
                <th>Validated</th>
                <th>Commit</th>
            </tr>
        </thead>
        <tbody>
            {%- for board in boards.boards -%}
            <tr class="board-row">
                <td class="board-name">{{ board.name }}</td>
                <td class="board-vendor">{{ board.vendor }}</td>
                <td class="board-model"><code>{{ board.model }}</code></td>
                <td class="validation-status">
                    {%- if board.validation.status == "validated" -%}
                    <span class="status-validated">✓ Validated</span>
                    {%- elsif board.validation.status == "in_progress" -%}
                    <span class="status-in-progress">⏳ In Progress</span>
                    {%- elsif board.validation.status == "not_validated" -%}
                    <span class="status-not-validated">❌ Not Validated</span>
                    {%- else -%}
                    <span class="status-pending">⏸ Pending</span>
                    {%- endif -%}
                </td>
                <td class="validation-date">{{ board.validation.date }}</td>
                <td class="commit-info">
                    <a href="{{ boards.github_repo }}/commit/{{ board.validation.commit }}" 
                       target="_blank" 
                       rel="noopener"
                       class="commit-link">
                        <code>{{ board.validation.commit | slice: 0, 7 }}</code>
                    </a>
                </td>
            </tr>
            {%- endfor -%}
        </tbody>
    </table>
</div>

---

## Download Pre-built Binaries

Pre-built firmware binaries are automatically generated for all validated boards using GitHub Actions. Download the latest firmware for your hardware:

<div class="download-section">
    {%- for board in boards.boards -%}
    {%- if board.validation.status == "validated" -%}
    <div class="download-card">
        <h4>{{ board.name }}</h4>
        <p class="board-model">{{ board.model }}</p>
        <div class="download-links">
            <a href="https://github.com/canopybmc/openbmc/releases/latest/download/{{ board.model | downcase | replace: " ", "-" }}-firmware.bin" 
               class="download-btn"
               target="_blank" 
               rel="noopener">
                📦 Download BMC Firmware
            </a>
        </div>
        <p class="validation-info">
            <small>
                Validated: {{ board.validation.date }} |
                <a href="{{ boards.github_repo }}/commit/{{ board.validation.commit }}" target="_blank" rel="noopener">
                    Commit {{ board.validation.commit | slice: 0, 7 }}
                </a>
            </small>
        </p>
    </div>
    {%- endif -%}
    {%- endfor -%}
</div>

<div class="download-notice">
    <h4>📋 Installation Notes</h4>
    <ul>
        <li><strong>BMC Firmware files</strong> are the main firmware images for your board's BMC</li>
        <li>Always verify checksums before flashing (available in release notes)</li>
        <li>Consult your hardware documentation for flashing procedures</li>
        <li>Join our <a href="{{ boards.github_repo }}/discussions" target="_blank" rel="noopener">community discussions</a> for installation help</li>
    </ul>
</div>

---

## Validation Process

Each board undergoes comprehensive testing before being marked as validated:

1. **Hardware Compatibility**: Physical compatibility and basic functionality
2. **Feature Testing**: Verification of all supported features
3. **Performance Testing**: Stress testing and performance benchmarks
4. **Security Testing**: Vulnerability assessment and security validation
5. **Integration Testing**: End-to-end system integration verification

---

## Adding New Boards

Interested in adding support for a new board? Check out our [contribution guidelines]({{ boards.github_repo }}/blob/main/CONTRIBUTING.md) and join the discussion on [GitHub]({{ boards.github_repo }}/discussions).

</div>
