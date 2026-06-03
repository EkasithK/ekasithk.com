# ekasithk-portfolio

Personal CV / portfolio site for **[ekasithk.com](https://ekasithk.com)** — a single-page,
terminal-themed showcase of Ekasith's work as a civil engineer, software / digital-twin
developer, PhD researcher, and esports competitor. Built as a static site and deployed
free on Cloudflare Pages. Also generates a downloadable professional `CV.pdf`.

## Tech
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Static export (`output: "export"`) → `./out`
- Hosting: Cloudflare Pages

## Local setup
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)
```bash
npm run build    # outputs static site to ./out
npm run lint
```

## Editing content
All CV copy lives in **`src/data/content.ts`** (typed). To change anything on the site,
edit that file — it is the single source of truth consumed by both the website and the CV.pdf.

## Deploy (Cloudflare Pages)
1. Push to GitHub.
2. Cloudflare Dashboard → Workers & Pages → create a Pages project from the repo.
3. Build command: `npm run build` · Build output directory: `out`.
4. Add custom domain `ekasithk.com` (DNS auto-configures since the domain is on Cloudflare).

## Project structure
- `src/app/` — layout, page, `/cv` print route, global styles
- `src/sections/` — page sections (Hero, About, Skills, Projects, Experience, Esports,
  Research, Education, Contact)
- `src/components/` — reusable UI (terminal window, typewriter, nav, etc.)
- `src/data/content.ts` — single source of truth for all content
- `public/cv/` — generated CV.pdf · `public/img/` — images

## License
The source code is released under the [MIT License](./LICENSE). Personal content
— the CV text, biographical information, and all images of Ekasith Kowcharoen —
is **not** covered by the MIT license and remains All Rights Reserved.
