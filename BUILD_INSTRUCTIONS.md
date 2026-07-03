# Build Instructions

## Project name

Daddy's Website

## Purpose

Create Brandon's personal builder headquarters: one place to organize ideas, projects, websites, apps, books, AI tools, 3D-print designs, and business systems.

## Current implementation

This is a static website.

- HTML: `index.html`
- CSS: `styles.css`
- JavaScript: `script.js`
- No package manager required
- No build command required
- Data saved by the project tracker is stored in the browser with `localStorage`

## Local preview

Open `index.html` in a browser.

## Deployment

### Recommended first deployment

Use Cloudflare Pages or Netlify as a static site.

### Cloudflare Pages settings

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`
- Production branch: `main`

### Netlify settings

- Build command: leave blank
- Publish directory: `.`

## Implementation principles

1. Start simple and useful.
2. Keep deployment easy.
3. Keep code readable.
4. Add database/auth only when needed.
5. Make the website help Brandon take action.

## Future upgrade path

Only upgrade to a full app framework when the static site becomes limiting.

Recommended next step when needed:

```text
React + Vite frontend
Supabase or Firebase backend
GitHub + Netlify/Cloudflare deployment
```

## Suggested future database tables

When database storage is needed, start with:

```text
projects
- id
- title
- type
- status
- priority
- description
- next_action
- created_at
- updated_at

notes
- id
- project_id
- note
- created_at

assets
- id
- project_id
- file_name
- file_url
- asset_type
- created_at
```

## AI editing instruction

Before making changes, inspect the current files. Then implement the smallest complete improvement that moves Daddy's Website closer to being Brandon's command center for building projects.

Do not ask for permission for obvious improvements that match the mission. Be decisive and keep the site working.
