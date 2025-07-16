# Canopy Website

The official website for the Canopy open-source firmware project. Built with 11ty (Eleventy) static site generator.

## Project Structure

```
.
├── _data/                  # Global data files (JSON, JS)
├── _layouts/               # Template layouts (Nunjucks)
│   └── base.njk           # Base layout template
├── _site/                  # Generated static site (build output)
├── assets/                 # Static assets
│   └── css/
│       └── canopy.css     # Main stylesheet with Violet Future theme
├── governance.md           # Governance page content
├── index.md               # Homepage content
├── CLAUDE.md              # Project instructions and guidelines
├── .eleventy.js           # 11ty configuration
├── package.json           # Node.js dependencies and scripts
└── README.md              # This file
```

## Features

- **Static Site Generation**: Built with 11ty for fast, secure hosting
- **Violet Future Theme**: Custom design with purple/lilac color scheme
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Content Management**: Markdown-based content with front matter
- **Typography**: Space Grotesk (headers) and Inter (body) fonts
- **Navigation**: Sticky header with smooth scrolling
- **Feature Cards**: Highlighted capabilities with custom SVG icons

## Building the Site

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

To run the development server with live reload:

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Production Build

To build the site for production:

```bash
npm run build
```

The generated static files will be in the `_site/` directory.

### Available Scripts

- `npm run build` - Build the site for production
- `npm run dev` - Start development server with live reload
- `npm run clean` - Clean the build output directory

## Content Management

### Pages

- **Homepage** (`index.md`): Hero section, feature cards, and call-to-action
- **Governance** (`governance.md`): Project governance structure and processes

### Adding New Pages

1. Create a new `.md` file in the root directory
2. Add front matter with layout, title, and description:

```yaml
---
layout: base.njk
title: "Page Title"
description: "Page description for SEO"
---
```

3. Add the page to the navigation in `_layouts/base.njk`

### Styling

The main stylesheet is located at `assets/css/canopy.css` and includes:

- CSS custom properties for the Violet Future color scheme
- Responsive design patterns
- Component-specific styling for feature cards, tables, and content pages

## Deployment

The website is automatically deployed through **Netlify** with the following configuration:

- **Build Command**: `npm run build`
- **Publish Directory**: `_site`
- **Node Version**: Latest LTS
- **Auto-deploy**: Enabled for main branch

### Environment

The site is optimized for:
- Modern browsers (ES6+ support)
- Mobile-first responsive design
- Fast loading with minimal JavaScript
- SEO-friendly markup and meta tags

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## Development Notes

The majority of this website's code has been written by **Claude** (Anthropic's AI assistant) following the project specifications and design guidelines outlined in `CLAUDE.md`.

## License

This project is part of the Canopy open-source firmware project. Please refer to the main project repository for licensing information.

## Support

For issues or questions about the website:
- Create an issue in the GitHub repository
- Check the project documentation
- Join the community discussions

---

**Open Firmware, Open Future** 🌿