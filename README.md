# portfolio-site

Personal engineering portfolio for Tanaboon “Max” Jewriyavetch.

Built with Astro, TypeScript, MDX and plain CSS. Static output — no client framework.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Regenerates `public/resume.pdf`, builds the site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run resume` | Regenerate `public/resume.pdf` on its own (dependency-free Node script) |

## Deploy

The built `dist/` folder is pushed to the `main` branch for GitHub Pages
(serves `tanaboonjew.github.io`). Site source lives on the `source` branch.
