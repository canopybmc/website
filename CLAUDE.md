# PROJECT BRIEF: Create Static Site with 11ty for Canopy

## GENERAL
- Framework: [11ty (Eleventy)](https://www.11ty.dev/)
- Build system: Static site (no server-side rendering)
- Content sources: 
  - Markdown (`.md`) files for pages (e.g. `index.md`, `about.md`)
  - JSON files for structured data (e.g. team members, release list)

## BRANDING & DESIGN (Use throughout site)

### Color Scheme: "Violet Future"
| Element       | Description     | Hex        |
|---------------|-----------------|------------|
| Primary       | Purple Grape    | `#6C4AB6`  |
| Secondary     | Electric Lilac  | `#B983FF`  |
| Accent        | Mint Cream      | `#EFFFFD`  |
| Neutral       | Soft Gray       | `#E0E0E0`  |
| Text          | Midnight        | `#1E1E2F`  |

### Fonts:
- Header: `"Space Grotesk", sans-serif;`
- Body: `"Inter", sans-serif;`
- Use Google Fonts CDN to load fonts in the `head` of the layout.

## SITE STRUCTURE
### Pages:
1. `/` - Homepage with:
 - Hero section (with tagline: “Open Firmware, Open Future”)
 - Short section: “Why Canopy?” (3-column layout: Security, Transparency, Developer-first)
 - CTA Button: “Get Started” → `/docs`

2. `/about` - Markdown-driven page about the project

3. `/releases` - Render a release list from `releases.json`

4. `/docs` - Pull in `.md` content from `/content/docs/` subfolder

## NAVIGATION (Top-level)
- Logo (placeholder SVG)
- Links: Home, Features, Releases, Docs
- Top nav bar should be sticky on scroll

## FOOTER
- Copyright notice
- GitHub link
- Optionally newsletter signup

## STYLING NOTES
- Base font size: `16px`
- Use `canopy.css` for global CSS overrides
- Buttons: rounded, filled with Primary color, white text
- Links: use Secondary color
- Code blocks (in docs): monospace font, styled with dark background
- Markdown should be styled with good spacing and max width ~720px

## BONUS (OPTIONAL)
- Create an `open-graph.json` that holds title, description, and image metadata for SEO
- Use 11ty shortcodes to insert external links or call-to-action buttons
