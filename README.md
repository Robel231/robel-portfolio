# Robel Shemeles: AI Engineer & Full-Stack Developer Portfolio

Source of [robel-portfolio-ten.vercel.app](https://robel-portfolio-ten.vercel.app), the personal portfolio of Robel Shemeles Alemayhu. It covers the production systems he builds and runs: FastAPI and Go backends, a Go e-invoicing platform, Next.js and Flutter apps, AI assistants on n8n and Gemini, and SEO/GEO.

## Stack

- [React 19](https://react.dev/) and TypeScript, bundled by [Vite](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/), compiled at build time (`tailwind.config.js`, `index.css`)
- [Framer Motion](https://motion.dev/) for scroll and layout animation, which respects `prefers-reduced-motion`
- [Vercel Analytics](https://vercel.com/analytics)

## Pages

- `/`: the portfolio, one page of sections
- `/services/eims-e-invoicing-integration`, `/services/ai-chatbots-automation`, `/services/web-mobile-app-development`, `/services/seo-geo`: one landing page per service, aimed at what businesses in Ethiopia search for
- `/am`: the services and projects in Amharic, linked to `/` with `hreflang`

The landing pages are data: their copy lives in `content/pages.ts` and `components/ServicePage.tsx` renders it. To add a page, add an entry there; the route, sitemap entry, head tags and JSON-LD follow from it.

## SEO

`npm run build` prerenders every route: after the normal client build it builds `entry-server.tsx` for Node, renders each route to HTML and writes it to `dist/<path>/index.html` with that page's `<head>` (`scripts/prerender.js`), then writes `dist/sitemap.xml`. Crawlers that don't run JavaScript, which includes most AI assistants, read the full page; in the browser React hydrates that markup. Anything rendered during that pass must not touch `window`, `document` or `localStorage`, and must render the same on the server as on the client's first render; read browser state in an effect instead (see `ThemeContext.tsx`). Above-the-fold text animates in with CSS (`animate-fade-up`) rather than Framer Motion, so it paints before the JavaScript loads.

`seo.ts` owns everything a crawler reads outside the page body: the route list, per-page title, description, canonical, `hreflang`, Open Graph and Twitter cards, JSON-LD (`Person`, `WebSite`, `ProfilePage`/`WebPage`, `Service`, `BreadcrumbList`, `FAQPage`) and the sitemap. `index.html` only holds a `<!--app-head-->` placeholder for it; in dev a small plugin in `vite.config.ts` fills it the same way. `SITE_URL` there is the one place the domain is set (also update `robots.txt` and `llms.txt` if it moves). `vercel.json` redirects a trailing slash away, so each page has one URL. It deliberately leaves `cleanUrls` off: that would redirect `google25a2b040452c4aae.html`, the file Search Console re-checks to keep the site verified.

`public/` holds `robots.txt`, `llms.txt`, `og-image.jpg` and the favicons. When the content changes, update `llms.txt` to match and bump the page's `updated` date (it feeds the sitemap's `lastmod` and the JSON-LD's `dateModified`).

## Layout

```
.
├── index.html          # head: icons, pre-paint theme script, fonts, <!--app-head--> placeholder
├── index.css           # Tailwind layers + custom animations (grid, marquee, spotlight, ...)
├── index.tsx           # browser entry point (hydrates the prerendered HTML)
├── entry-server.tsx    # build-time entry that renders a route to HTML
├── scripts/prerender.js
├── seo.ts              # routes, per-page head tags, JSON-LD, sitemap
├── content/pages.ts    # copy for the service pages and the Amharic page
├── App.tsx             # picks the page for a path: home sections or a landing page
├── types.ts            # Project, ExperienceItem, SkillCategory, page and route types
├── components/         # one file per section (Hero, About, Skills, Experience, Projects, Services, Contact, ...)
│   └── icons/          # SVG icon components
├── utils/              # small shared helpers (cursor spotlight, GitHub API)
└── public/             # screenshots, CV, share image, favicons, robots.txt, llms.txt
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
