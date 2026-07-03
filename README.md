# Daddy's Website

Daddy's Website is Brandon's personal project headquarters: a place to plan, build, edit, and launch websites, apps, books, AI tools, 3D-print ideas, and business projects.

## What this site is for

This site is designed to be a simple creative command center. It should help Brandon:

- collect ideas quickly
- organize active projects
- decide what to build next
- create websites and apps
- improve business tools
- save prompts and build instructions
- hand clear instructions to AI coding tools

## Current build decision

This project intentionally starts as a **static website** using plain HTML, CSS, and JavaScript.

That is the best starting choice because:

- it deploys almost anywhere
- it does not require a build system
- it is easy to edit from GitHub
- AI tools can modify it safely
- it can later be upgraded to React, Vite, Next.js, or a backend app when the need is real

## Run locally

Open `index.html` in a browser.

No install step is required.

## Deploy settings

Use these settings for simple hosting platforms:

### Cloudflare Pages

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`
- Production branch: `main`

### Netlify

- Build command: leave blank
- Publish directory: `.`

## Project structure

```text
/
├── index.html          # Main website
├── styles.css          # Visual design
├── script.js           # Local project tracker behavior
├── AGENTS.md           # AI builder instructions
├── BUILD_INSTRUCTIONS.md
├── netlify.toml        # Netlify static deploy config
└── README.md
```

## Design direction

The website should feel like a builder's workshop, not a corporate portfolio. It should be practical, decisive, useful, and easy to expand.

## Next upgrades

Good future upgrades include:

1. Add login and cloud storage.
2. Add project templates for websites, apps, books, 3D prints, and business tools.
3. Connect a database for saved projects.
4. Add AI prompt generators.
5. Add file upload and project notes.
6. Add deployment status for GitHub, Netlify, and Cloudflare.
