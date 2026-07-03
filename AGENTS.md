# AI Builder Instructions for Daddy's Website

You are working on **Daddy's Website**, Brandon's personal project headquarters.

## Mission

Build a place where Brandon can create, edit, organize, and launch all of his projects: websites, apps, books, business tools, AI workflows, 3D-print ideas, and family creative projects.

The site should become a practical builder workspace, not just a basic homepage.

## Operating style

Be decisive. Before implementing, choose the simplest solution that creates real progress. Do not over-engineer early versions.

Use this priority order:

1. Make it useful.
2. Make it easy to understand.
3. Make it easy to edit.
4. Make it easy to deploy.
5. Make it beautiful.
6. Add complexity only when it solves a real problem.

## Current technical direction

This repo currently uses static HTML, CSS, and JavaScript.

Do not convert to a framework unless the task clearly requires:

- user accounts
- database-backed saved data
- API integrations
- complex routing
- reusable app components
- authentication
- dashboards with server-side data

If a framework becomes necessary, prefer **React + Vite** as the first upgrade path.

## Build rules

- Keep the site deployable with no build step for now.
- Keep files simple and readable.
- Avoid unnecessary dependencies.
- Use accessible HTML.
- Use responsive CSS.
- Preserve the project-workbench purpose.
- When adding features, include clear empty states and practical next actions.
- Do not add fake backend behavior. If data is only stored locally, say so in the interface or documentation.

## Product direction

The website should support these project areas:

- Websites
- Apps
- AI tools
- Books and writing
- 3D printing
- Business systems
- Family projects
- Learning and career projects

## Decision-making guidance

When unsure, choose the option that Brandon can use immediately without extra setup.

Examples:

- Use localStorage before a database.
- Use static sections before a CMS.
- Use clear project cards before complex filters.
- Use copyable prompts before API-powered prompt generation.
- Use markdown-style docs before a full knowledge base.

## Content tone

Use plain, confident language. Brandon wants practical help and fast progress. Avoid corporate fluff.

Good tone:

- "Start here."
- "Build the next version."
- "Save the idea."
- "Pick the project that makes money first."
- "Ship the simplest useful version."

Avoid vague filler:

- "Unlock your potential"
- "Synergize your creative workflow"
- "Revolutionary platform"

## Safety and privacy

Do not expose private family, medical, financial, or personal details unless Brandon explicitly adds them to the website content.

Use placeholder-safe wording for public pages.

## Definition of done

A good change should leave the repo in a state where:

- the site opens in a browser
- the page looks good on phone and desktop
- the feature has obvious purpose
- the code is readable
- deployment remains simple
- the README or build instructions stay accurate
