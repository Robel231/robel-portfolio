# Robel Shemeles: AI Engineer & Full-Stack Developer Portfolio

Source of [robel-portfolio-ten.vercel.app](https://robel-portfolio-ten.vercel.app), the personal portfolio of Robel Shemeles Alemayhu. It covers the production systems he builds and runs: FastAPI and Go backends, a Go e-invoicing platform, Next.js and Flutter apps, AI assistants on n8n and Gemini, and SEO/GEO.

## Stack

- [React 19](https://react.dev/) and TypeScript, bundled by [Vite](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/), compiled at build time (`tailwind.config.js`, `index.css`)
- [Framer Motion](https://motion.dev/) for scroll and layout animation, which respects `prefers-reduced-motion`
- [Vercel Analytics](https://vercel.com/analytics)

## SEO

`npm run build` prerenders the page: after the normal client build it builds `entry-server.tsx` for Node, renders the app to HTML and writes it into `dist/index.html` (`scripts/prerender.js`). Crawlers that don't run JavaScript, which includes most AI assistants, read the full page; in the browser React hydrates that markup. Anything rendered during that pass must not touch `window`, `document` or `localStorage`, and must render the same on the server as on the client's first render; read browser state in an effect instead (see `ThemeContext.tsx`).

The rest lives in `index.html` (meta tags, Open Graph card, JSON-LD for `WebSite`, `ProfilePage` and `Person`) and `public/` (`robots.txt`, `sitemap.xml`, `llms.txt`, `og-image.jpg`, favicons). When the content changes, update `llms.txt` to match and bump `lastmod` in `sitemap.xml` and `dateModified` in the JSON-LD.

## Layout

```
.
├── index.html          # head: SEO meta, JSON-LD, pre-paint theme script, fonts
├── index.css           # Tailwind layers + custom animations (grid, marquee, spotlight, ...)
├── index.tsx           # browser entry point (hydrates the prerendered HTML)
├── entry-server.tsx    # build-time entry that renders the page to HTML
├── scripts/prerender.js
├── App.tsx             # assembles the sections
├── types.ts            # Project, ExperienceItem, SkillCategory
├── components/         # one file per section (Hero, About, Skills, Experience, Projects, Contact, ...)
│   └── icons/          # SVG icon components
├── utils/              # small shared helpers (cursor spotlight, GitHub API)
└── public/             # screenshots, CV, share image, favicons, robots.txt, sitemap.xml, llms.txt
```

Content lives in the components as plain data (`projectData` and `featuredProjects` in `Projects.tsx`, `experienceData` in `Experience.tsx`, `skillData` in `Skills.tsx`). Every figure on the site should match the CV in `public/Robel_Shemeles_CV.pdf`.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
npx tsc --noEmit  # type-check
npm run build     # production build into dist/, prerendered
```

A push to `main` deploys to production on Vercel.
