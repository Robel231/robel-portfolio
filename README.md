# Robel Shemeles: AI Engineer & Full-Stack Developer Portfolio

Source of [robel-portfolio-ten.vercel.app](https://robel-portfolio-ten.vercel.app), the personal portfolio of Robel Shemeles Alemayhu. It covers the production systems he builds and runs: FastAPI and Go backends, a Go e-invoicing platform, Next.js and Flutter apps, AI assistants on n8n and Gemini, and SEO/GEO.

## Stack

- [React 19](https://react.dev/) and TypeScript, bundled by [Vite](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/), compiled at build time (`tailwind.config.js`, `index.css`)
- [Framer Motion](https://motion.dev/) for scroll and layout animation, which respects `prefers-reduced-motion`
- [Vercel Analytics](https://vercel.com/analytics)

## Layout

```
.
├── index.html          # head: SEO meta, JSON-LD, pre-paint theme script, fonts
├── index.css           # Tailwind layers + custom animations (grid, marquee, spotlight, ...)
├── index.tsx           # entry point
├── App.tsx             # assembles the sections
├── types.ts            # Project, ExperienceItem, SkillCategory
├── components/         # one file per section (Hero, About, Skills, Experience, Projects, Contact, ...)
│   └── icons/          # SVG icon components
├── utils/              # small shared helpers (cursor spotlight, GitHub API)
└── public/             # project screenshots and Robel_Shemeles_CV.pdf
```

Content lives in the components as plain data (`projectData` and `featuredProjects` in `Projects.tsx`, `experienceData` in `Experience.tsx`, `skillData` in `Skills.tsx`). Every figure on the site should match the CV in `public/Robel_Shemeles_CV.pdf`.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
npx tsc --noEmit  # type-check
npm run build     # production build into dist/
```

A push to `main` deploys to production on Vercel.
