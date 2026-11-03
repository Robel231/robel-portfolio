import type { Lang, PageContent } from '../types';

// Copy for the landing pages. Every figure here must match the project cards and the CV;
// when a page's content changes, bump its `updated` date (sitemap lastmod, JSON-LD dateModified).

export const contact = {
  email: 'robelshemeles4@gmail.com',
  phone: '+251703476023',
  phoneDisplay: '+251 703 476 023',
  telegram: 'https://t.me/Itsurboi_robel',
  telegramHandle: '@Itsurboi_robel',
};

export const uiText: Record<Lang, {
  home: string;
  telegram: string;
  email: string;
  learnMore: string;
  related: { eyebrow: string; heading: string };
  cta: { eyebrow: string; heading: string; body: string };
  nav: { about: string; skills: string; experience: string; projects: string; services: string; contact: string; hire: string };
  /** The language switch in the header: where the other language lives. */
  switchTo: { href: string; label: string; lang: Lang };
}> = {
  en: {
    home: 'Home',
    telegram: 'Message me on Telegram',
    email: 'Email',
    learnMore: 'Learn more',
    related: { eyebrow: 'More services', heading: 'Other things I build' },
    cta: {
      eyebrow: 'Contact',
      heading: "Let's talk about your project",
      body: 'Tell me what you need on Telegram, by email or by phone. I reply in English or Amharic.',
    },
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', services: 'Services', contact: 'Contact', hire: 'Hire Me' },
    switchTo: { href: '/am', label: 'አማርኛ', lang: 'am' },
  },
  am: {
    home: 'መነሻ',
    telegram: 'በቴሌግራም ይጻፉልኝ',
    email: 'ኢሜይል',
    learnMore: 'ዝርዝሩ (በእንግሊዝኛ)',
    related: { eyebrow: 'ሌሎች አገልግሎቶች', heading: 'ሌሎች የምሠራቸው' },
    cta: {
      eyebrow: 'አግኙኝ',
      heading: 'ስለ ፕሮጀክትዎ እንነጋገር',
      body: 'የሚፈልጉትን በቴሌግራም፣ በኢሜይል ወይም በስልክ ይንገሩኝ። በአማርኛ ወይም በእንግሊዝኛ እመልሳለሁ።',
    },
    nav: { about: 'ስለ እኔ', skills: 'ክህሎቶች', experience: 'የሥራ ልምድ', projects: 'ፕሮጀክቶች', services: 'አገልግሎቶች', contact: 'አድራሻ', hire: 'ያግኙኝ' },
    switchTo: { href: '/', label: 'English', lang: 'en' },
  },
};

const eInvoicing: PageContent = {
  kind: 'service',
  path: '/services/eims-e-invoicing-integration',
  lang: 'en',
  updated: '2026-11-03',
  title: 'EIMS E-Invoicing Integration in Ethiopia | Robel Shemeles',
  description:
    "Connect your POS, ERP or billing system to the Ministry of Revenue's EIMS: signed requests, IRN and QR codes, credit notes and Amharic PDF invoices.",
  keywords:
    'EIMS integration, e-invoicing Ethiopia, electronic invoice Ethiopia, Ministry of Revenue e-invoice API, IRN QR code invoice, POS e-invoicing integration, ERP e-invoicing Ethiopia, Odoo e-invoicing Ethiopia, Go developer Addis Ababa',
  name: 'EIMS e-invoicing integration',
  icon: 'invoice',
  summary:
    "Register invoices, receipts and credit notes with the Ministry of Revenue's EIMS from your POS, ERP or billing system, with IRN, QR codes and Amharic PDFs.",
  serviceType: 'Electronic invoicing (EIMS) integration',
  eyebrow: 'Service · E-invoicing',
  h1: 'EIMS e-invoicing integration for Ethiopian businesses',
  lead:
    "Under the Ministry of Revenue's 2026 e-invoicing directive, invoices are registered with the central Electronic Invoice Management System (EIMS), rolled out in phases starting with large and VAT-registered taxpayers. An invoice is valid once EIMS returns its Invoice Registration Number (IRN) and QR code. I connect POS, ERP and billing software to the EIMS API, and I'm building a multi-tenant Go e-invoicing platform that does this for many businesses at once, now going through the Ministry's accreditation.",
  highlights: [
    'IRN and QR code on every invoice',
    'SHA512withRSA request signing',
    'Receipts, credit and debit notes, cancellations',
    'Amharic A4 and thermal PDFs',
    '360+ Go tests',
  ],
  offer: {
    eyebrow: 'What I build',
    heading: 'From your sale to a registered invoice',
    items: [
      {
        title: 'EIMS integration for your existing system',
        body: 'Your POS, ERP or billing app keeps working as it does. I add the layer that signs each request, registers invoices, receipts, credit and debit notes and cancellations with EIMS, and stores the IRN and QR code against the sale.',
      },
      {
        title: 'A multi-tenant e-invoicing platform',
        body: "For accounting firms, software vendors and groups of companies: one service that registers documents for many taxpayers, each tenant's data encrypted under its own AES-256-GCM key, behind role-based access, TOTP two-factor sign-in and a tamper-evident audit log.",
      },
      {
        title: 'Invoices people can read',
        body: 'A4 and thermal-printer PDF invoices in Amharic with the EIMS QR code, and a web console in English and Amharic for the finance team.',
      },
      {
        title: 'A Go SDK for your own services',
        body: 'Request signing is byte-exact SHA512withRSA, where one byte out of place gets a request rejected. The SDK handles it, so your Go services call EIMS with typed requests and responses.',
      },
    ],
  },
  proof: {
    eyebrow: 'Proof',
    heading: 'Built, tested and run in production',
    items: [
      {
        title: 'EIMS e-invoicing platform',
        metric: '360+ Go tests · govulncheck CI',
        body: 'Multi-tenant Go service on PostgreSQL (chi, pgx) that registers invoices, receipts, credit and debit notes and cancellations with EIMS. In development and going through Ministry of Revenue accreditation.',
      },
      {
        title: 'Production systems I run today',
        metric: '82 endpoints · 600+ tests',
        body: 'DrogaBooking and DrogaPulse run in daily use across a group of companies, on servers I operate with Docker, Traefik, Cloudflare and automated backups.',
      },
      {
        title: 'Financial platforms at 99.9% uptime',
        metric: 'Abronet PLC · 2024 to 2025',
        body: "As system administrator I kept a financial company's web platforms at 99.9% uptime and hardened their security and access control.",
      },
    ],
  },
  steps: {
    eyebrow: 'Process',
    heading: 'How an integration runs',
    items: [
      { title: 'Map your documents', body: 'We list what you issue (invoices, receipts, credit notes, cancellations) and where each comes from: POS, ERP or a custom app.' },
      { title: 'Connect and sign', body: 'I build the connector: request signing, IRN and QR storage, and a queue so a sale is never lost when the network drops.' },
      { title: 'Test every document type', body: 'Each document type is tested end to end against EIMS before go-live, and the automated tests keep running on every change.' },
      { title: 'Go live and monitor', body: 'Deployed on your server or a VPS, with monitoring, backups and an audit log your accountant can follow.' },
    ],
  },
  context: {
    eyebrow: 'Background',
    heading: 'E-invoicing in Ethiopia, in brief',
    items: [
      "The Ministry of Revenue's Electronic Invoicing System Administration Directive (No. 1142, issued in 2026) is the legal basis for e-invoicing.",
      'An invoice is valid once EIMS registers it and returns an Invoice Registration Number (IRN) and QR code; receipts get a Receipt Registration Number (RRN).',
      "Rollout is phased by taxpayer group, starting with large and VAT-registered taxpayers. The Ministry of Revenue (mor.gov.et) publishes each group's schedule.",
      "Software that issues e-invoices for a business needs the Ministry's authorisation, which is why accreditation matters when you choose a provider.",
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Questions businesses ask about EIMS',
    items: [
      {
        q: 'What is EIMS?',
        a: "EIMS is the Ethiopian Ministry of Revenue's Electronic Invoice Management System. Business software sends each invoice or receipt to it in real time, and EIMS returns a registration number and QR code that make the document valid.",
      },
      {
        q: 'Do I need to replace my POS or ERP?',
        a: 'Usually not. If your system can export or send its sales data, an integration layer can register each document with EIMS and write the IRN and QR code back. Replacing it only makes sense when the current system cannot share its data at all.',
      },
      {
        q: 'When does my business have to comply?',
        a: "The Ministry rolls e-invoicing out in phases by taxpayer group, starting with large and VAT-registered taxpayers. Check the Ministry of Revenue's schedule for your group; building the integration early avoids a rush near your date.",
      },
      {
        q: 'Can invoices be printed in Amharic?',
        a: 'Yes. The platform I am building produces A4 and thermal-printer PDF invoices in Amharic, with the EIMS QR code on each one.',
      },
      {
        q: 'Is your platform accredited by the Ministry of Revenue?',
        a: "It is going through the Ministry's accreditation now. Meanwhile I can build and test your integration so it is ready when your group's date arrives.",
      },
      {
        q: 'Who builds it?',
        a: 'Robel Shemeles, a Go and Python developer in Addis Ababa with 3+ years running production systems, including financial web platforms kept at 99.9% uptime.',
      },
    ],
  },
  cta: {
    heading: 'Getting ready for e-invoicing?',
    body: 'Tell me what system you invoice from today and I will tell you what connecting it to EIMS involves. English or Amharic, on Telegram, email or phone.',
  },
};

const aiAutomation: PageContent = {
  kind: 'service',
  path: '/services/ai-chatbots-automation',
  lang: 'en',
  updated: '2026-11-03',
  title: 'AI Chatbots & Automation in Ethiopia | Robel Shemeles',
  description:
    'AI assistants and Telegram bots for Ethiopian businesses in Amharic and English, built on n8n and Gemini and answering only from your own data.',
  keywords:
    'AI chatbot Ethiopia, Amharic chatbot, Amharic AI, Telegram bot developer Ethiopia, AI automation Addis Ababa, n8n developer Ethiopia, Gemini AI Ethiopia, AI developer Ethiopia, AI agent developer, business automation Ethiopia',
  name: 'AI chatbots and automation',
  icon: 'ai',
  summary:
    'Assistants that answer customers and staff in Amharic and English, on Telegram or the web, from your own data, plus n8n automations between your tools.',
  serviceType: 'AI chatbot and workflow automation development',
  eyebrow: 'Service · AI & automation',
  h1: 'AI chatbots and automation for Ethiopian businesses',
  lead:
    'I build AI assistants that answer customers and staff in Amharic and English, on Telegram, the web or inside your own systems, and automations that move data between the tools you already use. Five are in daily use today, in pharmacy, HR, ERP, supplier and registration work. None of them is allowed to write its own SQL: each answers only through approved, permission-scoped queries.',
  highlights: ['Amharic and English', 'Telegram and web chat', 'Reads photos and voice', 'Permission-scoped data access', 'n8n · Gemini · FastAPI'],
  offer: {
    eyebrow: 'What I build',
    heading: 'Assistants that do real work',
    items: [
      {
        title: 'Customer-facing assistants',
        body: 'Chatbots that answer stock, price and order questions from your live data, read photos such as prescriptions, and alert your team when something needs a person, like a stock-out.',
      },
      {
        title: 'Internal assistants for staff',
        body: 'Ask the ERP, HR or reporting system in plain language. Each person sees only what their role allows: identity comes from a signed JWT, and the assistant runs read-only, pre-approved queries.',
      },
      {
        title: 'Amharic voice and text',
        body: 'Voice registration in Amharic that turns speech into structured records, and assistants that reply in Amharic, a language most off-the-shelf bots overlook.',
      },
      {
        title: 'Workflow automation',
        body: 'n8n workflows that sync CRM records to Jira, send Slack or Telegram alerts, process webhooks and schedule reports, so routine work happens without anyone copying data by hand.',
      },
    ],
  },
  proof: {
    eyebrow: 'Proof',
    heading: 'Assistants in daily use',
    items: [
      {
        title: 'AI pharmacy assistant',
        metric: '26 nodes · 5 agents',
        body: 'Five specialist Gemini agents with shared memory: answers stock questions, reads prescription photos, guides patients to the right medicine and alerts the sales team about stock-outs.',
      },
      {
        title: 'HR performance assistant',
        metric: 'Role-scoped data',
        body: 'Employees, managers and HR each see only what their role allows, enforced by FastAPI middleware that verifies a signed JWT before the agent runs a query.',
      },
      {
        title: 'Odoo ERP assistant',
        metric: '8 live SQL tools',
        body: 'Natural-language questions answered from live Odoo data, with runtime schema inspection.',
      },
      {
        title: 'Amharic voice registration',
        metric: 'Amharic voice → data',
        body: 'A Gemini 2.5 Flash pipeline: spoken Amharic registration in, structured records out.',
      },
      {
        title: 'Market intelligence chatbot',
        metric: 'Who imports what',
        body: 'Answers who imports what, and at what price, from regulator import-permit data loaded by a Python ETL into PostgreSQL.',
      },
    ],
  },
  steps: {
    eyebrow: 'Process',
    heading: 'From idea to an assistant people use',
    items: [
      { title: 'Pick one job', body: 'We start with one task that costs your team hours every week, such as answering the same customer questions or pulling the same report.' },
      { title: 'Connect your data safely', body: 'The assistant gets read-only, permission-scoped access to exactly the data that job needs, and nothing else.' },
      { title: 'Test with real questions', body: 'We test with questions your customers and staff actually ask, in Amharic and English, before anyone outside the team sees it.' },
      { title: 'Launch and improve', body: 'It goes live on Telegram, your website or your internal tools, and I tune it from real conversations.' },
    ],
  },
  context: {
    eyebrow: 'Local fit',
    heading: 'Built for how Ethiopia works',
    items: [
      'Telegram is where Ethiopian customers already are, so an assistant can live there instead of in an app nobody installs.',
      "Amharic in and Amharic out, in text and voice, with Ge'ez script handled properly.",
      "Ethiopian names matched across spellings with habesha-names, my open-source library: Ge'ez to Latin and sound-alike matching.",
      'Your data stays under your rules: assistants run approved queries only, never free-form SQL against your database.',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Questions about AI assistants',
    items: [
      {
        q: 'Can an AI chatbot speak Amharic?',
        a: 'Yes. Modern models such as Gemini read and write Amharic and can transcribe Amharic speech. I have shipped an Amharic voice registration pipeline on Gemini 2.5 Flash, and assistants that reply in Amharic.',
      },
      {
        q: 'Can the bot run on Telegram?',
        a: 'Yes. Telegram bots are one of the channels I build on, alongside web chat and internal tools, and one assistant can serve more than one channel.',
      },
      {
        q: 'Is it safe to connect an AI to our database?',
        a: "It is when the AI never writes its own queries. My assistants call a fixed set of approved, read-only, permission-scoped queries, and every request carries the user's verified identity, so the AI only sees what that person is allowed to see.",
      },
      {
        q: 'What does it run on?',
        a: 'Usually n8n for the workflow, Gemini, OpenAI or Claude for the model, and a FastAPI service in front of your data, deployed with Docker on your server or a VPS.',
      },
      {
        q: 'Do you build automations without AI?',
        a: 'Yes. Much of the value is plain automation: syncing CRM records to Jira, Slack and Telegram alerts, webhooks and scheduled reports in n8n.',
      },
    ],
  },
  cta: {
    heading: 'Which job should an assistant take off your team?',
    body: 'Describe the questions your customers or staff ask most and where the answers live. I will tell you what an assistant for it looks like.',
  },
};

const webMobile: PageContent = {
  kind: 'service',
  path: '/services/web-mobile-app-development',
  lang: 'en',
  updated: '2026-11-03',
  title: 'Web & Mobile App Developer in Addis Ababa | Robel Shemeles',
  description:
    'Full-stack developer in Addis Ababa: FastAPI and Go backends, Next.js web apps and offline-first Flutter Android apps, tested and in production.',
  keywords:
    'software developer Addis Ababa, web developer Ethiopia, mobile app developer Ethiopia, Flutter developer Ethiopia, full-stack developer Ethiopia, FastAPI developer, Go developer Ethiopia, Next.js developer, freelance developer Ethiopia, hire Ethiopian developer, software company Addis Ababa',
  name: 'Web and mobile apps',
  icon: 'apps',
  summary:
    'Complete products from database to phone: FastAPI or Go backends, Next.js web apps and offline-first Flutter Android apps, deployed and kept running.',
  serviceType: 'Web and mobile application development',
  eyebrow: 'Service · Web & mobile',
  h1: 'Web and mobile app development in Addis Ababa',
  lead:
    'I build complete products: the backend and database, the web app, the Android app and the servers they run on. FastAPI or Go on PostgreSQL behind, Next.js or React in the browser, Flutter on the phone. DrogaBooking and DrogaPulse are in daily use across a group of companies, and across my projects I have written 1,800+ automated tests.',
  highlights: ['FastAPI · Go · PostgreSQL', 'Next.js and React', 'Offline-first Flutter', 'Amharic and the Ethiopian calendar', 'Docker, CI/CD and backups'],
  offer: {
    eyebrow: 'What I build',
    heading: 'Products, end to end',
    items: [
      {
        title: 'Business web apps and SaaS',
        body: 'Booking systems, dashboards, portals and multi-tenant SaaS with role-based access, billing and audit trails, built on FastAPI or Go and PostgreSQL with a Next.js front end.',
      },
      {
        title: 'Android apps that work offline',
        body: "Flutter apps that keep working when the network drops and sync when it's back, so staff on a weak connection never lose their work.",
      },
      {
        title: 'APIs and integrations',
        body: 'Secure APIs between your apps, AI services and third parties: JWT auth, API keys, webhooks and request signing, with tests that run on every change.',
      },
      {
        title: 'Hosting and operations',
        body: 'Docker deployments behind Traefik or nginx and Cloudflare, GitHub Actions CI/CD and automated backups, on a VPS or your own server.',
      },
    ],
  },
  proof: {
    eyebrow: 'Proof',
    heading: 'Products in production',
    items: [
      {
        title: 'DrogaBooking',
        metric: '82 endpoints · 600+ tests',
        body: 'Meeting-room and staff booking for several companies: PostgreSQL rules that make double booking impossible, a Next.js web app, an offline-first Flutter Android app and per-company billing.',
      },
      {
        title: 'DrogaPulse',
        metric: 'Live · 4 networks · ~400 tests',
        link: 'https://drogapulse.drogatech.com',
        body: 'Social media SaaS that schedules and publishes to Facebook, Instagram, LinkedIn and X, with an Ethiopian calendar view, Gemini captions and a Capacitor Android app.',
      },
      {
        title: 'Wuten finance app',
        metric: '~430 tests',
        body: 'Flutter app that reads SMS from Ethiopian banks and telebirr to track spending, with budgets, equb and an AI assistant, in Amharic and English.',
      },
      {
        title: 'Executive dashboard API',
        metric: '68 routes · 351 e2e checks',
        body: 'Go backend (chi, pgx, goose, JWT) with multi-level approvals, KPIs, company comparison and a full audit trail.',
      },
      {
        title: 'DCS Wellness',
        metric: '4 languages · AI diagnostics',
        link: 'https://yene-jegna.drogapharma.rw',
        body: 'Health platform built from zero, with streaming AI diagnostics and Ethiopian food recognition from photos.',
      },
    ],
  },
  steps: {
    eyebrow: 'Process',
    heading: 'How a build runs',
    items: [
      { title: 'Scope it', body: 'We agree what the first release must do, who uses it, and what it has to connect to.' },
      { title: 'Build in view', body: 'You see a working version early on a staging link and steer as it grows.' },
      { title: 'Test what matters', body: 'Automated tests guard the rules that cost money when they break, like double bookings or wrong totals, on every change.' },
      { title: 'Ship and run it', body: 'I deploy, monitor and back it up, and hand over the code and documentation.' },
    ],
  },
  context: {
    eyebrow: 'Local fit',
    heading: 'Made for Ethiopian users',
    items: [
      'Amharic and English interfaces, with Ethiopian names matched across spellings.',
      'Ethiopian calendar views beside the Gregorian one, for teams that plan by it.',
      'Offline-first mobile apps for patchy connections and costly data.',
      'Finance features that read telebirr and bank SMS, as in Wuten.',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Questions about building with me',
    items: [
      {
        q: 'Do you build both the app and the backend?',
        a: 'Yes. I build the whole stack, from database, API and web app to Android app and servers, so one person is accountable for how it all fits together.',
      },
      {
        q: 'Flutter or React Native?',
        a: 'Flutter for most Android apps, especially offline-first ones. I have also shipped React Native (Expo) and Capacitor apps where sharing code with an existing web app made more sense.',
      },
      {
        q: 'Can the app be in Amharic?',
        a: "Yes. My apps ship Amharic and English interfaces, and I maintain habesha-names, an open-source library for matching Ethiopian names across Ge'ez and Latin spellings.",
      },
      {
        q: 'Where will it be hosted?',
        a: 'On a VPS or your own server with Docker, behind Traefik or nginx and Cloudflare, with CI/CD deploys and automated backups. I have kept financial platforms at 99.9% uptime.',
      },
      {
        q: 'Do you work with startups and companies abroad?',
        a: 'Yes. I work in English and Amharic, as a full-time remote engineer, freelancer or consultant, from Addis Ababa (East Africa Time, UTC+3).',
      },
    ],
  },
};

const seoGeo: PageContent = {
  kind: 'service',
  path: '/services/seo-geo',
  lang: 'en',
  updated: '2026-11-03',
  title: 'SEO & GEO Services in Ethiopia | Robel Shemeles',
  description:
    'SEO and GEO for Ethiopian businesses: technical SEO, schema markup, fast pages and Amharic content, so you show up in Google and in AI answers.',
  keywords:
    'SEO Ethiopia, SEO services Addis Ababa, SEO expert Ethiopia, GEO, generative engine optimization, AI search optimization, ChatGPT SEO, Amharic SEO, technical SEO, schema markup, website ranking Ethiopia',
  name: 'SEO and GEO',
  icon: 'seo',
  summary:
    'Get found in Google and named in ChatGPT, Gemini and Perplexity answers: technical SEO, structured data, fast pages and Amharic content.',
  serviceType: 'Search engine optimisation and generative engine optimisation',
  eyebrow: 'Service · SEO & GEO',
  h1: 'SEO and GEO for Ethiopian businesses',
  lead:
    "Search now has two front doors: Google's results, and the answers ChatGPT, Gemini and Perplexity write. SEO gets your site ranked in the first; Generative Engine Optimisation (GEO) gets your business named and cited in the second. I do both from the code up: pages crawlers can read, structured data, fast loads on mobile data, and content in English and Amharic that answers what your customers ask.",
  highlights: ['Technical SEO', 'Schema.org structured data', 'Core Web Vitals', 'llms.txt and AI crawlers', 'Amharic content'],
  offer: {
    eyebrow: 'What I do',
    heading: 'Fixed in the code, not just listed in a report',
    items: [
      {
        title: 'Technical SEO audit and fixes',
        body: 'Indexing, sitemaps, robots rules, canonical URLs, redirects, broken links and Core Web Vitals, fixed in the code and on the server.',
      },
      {
        title: 'Structured data',
        body: 'Schema.org markup for your organisation, services, products, people and FAQs, so search engines and AI models read the facts about your business without guessing.',
      },
      {
        title: 'Generative Engine Optimisation',
        body: 'Pages AI assistants can read and quote: prerendered HTML instead of empty JavaScript shells, answer-first content, an llms.txt, and the same facts about your business everywhere it appears.',
      },
      {
        title: 'Amharic and English content',
        body: 'Pages written for what Ethiopians actually search, in both languages. Amharic search has far fewer well-built pages competing for it.',
      },
      {
        title: 'Search Console and Bing setup',
        body: "Verification, sitemap submission and monitoring in Google Search Console and Bing Webmaster Tools. Bing's index also feeds Microsoft Copilot and is one of the sources behind ChatGPT search.",
      },
    ],
  },
  proof: {
    eyebrow: 'Proof',
    heading: 'Work you can check',
    items: [
      {
        title: 'drogaconsulting.com',
        metric: 'Ranks in AI search',
        link: 'https://drogaconsulting.com',
        body: 'Full audit and implementation: meta tags, schema.org structured data, sitemap and robots rules, Core Web Vitals, and GEO so the brand surfaces in ChatGPT, Perplexity and Gemini.',
      },
      {
        title: 'This website',
        metric: 'Prerendered · JSON-LD · llms.txt',
        body: 'Every page is prerendered, so crawlers and AI assistants read it without running JavaScript, with JSON-LD for the person, services and FAQs, an Amharic page and a sitemap generated at build time.',
      },
      {
        title: 'The servers too',
        metric: 'Docker · Traefik · Cloudflare',
        body: 'I run production servers, so speed and uptime fixes go in at the server and CDN, not only in the page.',
      },
    ],
  },
  steps: {
    eyebrow: 'Process',
    heading: 'How an engagement runs',
    items: [
      { title: 'Audit', body: 'Crawl the site the way Google and AI crawlers do, and list what blocks indexing, slows pages or muddles the facts.' },
      { title: 'Fix the foundations', body: 'Rendering, speed, structured data, sitemaps and canonical URLs, fixed in the code.' },
      { title: 'Write for real searches', body: 'Pages and FAQs in English and Amharic, built around what your customers ask Google and AI assistants.' },
      { title: 'Measure', body: 'Track impressions and rankings in Search Console and Bing, check how AI assistants describe you, and adjust.' },
    ],
  },
  context: {
    eyebrow: 'Local fit',
    heading: 'Search in Ethiopia',
    items: [
      'Most searches here happen on phones over mobile data, so light, fast pages decide who stays.',
      'People search in Amharic and in English, sometimes Amharic typed in Latin letters; pages in both languages catch both.',
      'Customers increasingly ask AI assistants for recommendations. If your business is not described clearly on the web, those answers name someone else.',
      'Consistent names, links and facts across your site, Google Business Profile, Telegram, LinkedIn and Facebook help Google and AI models trust them.',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Questions about SEO and GEO',
    items: [
      {
        q: 'What is GEO?',
        a: "Generative Engine Optimisation is the work of getting your business described accurately and recommended in AI-written answers from ChatGPT, Gemini, Perplexity and Google's AI Overviews. It builds on SEO: AI assistants mostly read the same crawlable pages search engines do.",
      },
      {
        q: 'Is SEO different in Ethiopia?',
        a: 'The basics are the same, but the details differ: most traffic is mobile on slower connections, people search in Amharic and English, and a Google Business Profile, Telegram and Facebook presence matter for local trust.',
      },
      {
        q: 'Can you do SEO in Amharic?',
        a: 'Yes. Amharic is my native language. I write and structure Amharic pages with proper language tags so Google serves them to people searching in Amharic.',
      },
      {
        q: 'How long until results show?',
        a: 'Technical fixes are picked up within days to weeks, once pages are recrawled; rankings for competitive terms take months. Amharic and niche local terms usually move faster, because fewer pages compete for them.',
      },
      {
        q: 'Do you guarantee first place on Google?',
        a: 'No one honestly can. I guarantee the work: a site search engines and AI assistants can read, fast pages, correct structured data, and content written for real searches.',
      },
    ],
  },
};

const amharic: PageContent = {
  kind: 'profile',
  path: '/am',
  lang: 'am',
  updated: '2026-11-03',
  title: 'ሮቤል ሽመልስ | የAI መሐንዲስ እና ሶፍትዌር ገንቢ፣ አዲስ አበባ',
  description:
    'በአዲስ አበባ የሚገኝ የAI መሐንዲስ እና ሶፍትዌር ገንቢ፦ የEIMS ኤሌክትሮኒክ ደረሰኝ ውህደት፣ በአማርኛ የሚመልሱ AI ቻትቦቶች እና የቴሌግራም ቦቶች፣ ዌብሳይት እና የሞባይል መተግበሪያዎች፣ SEO።',
  keywords:
    'ሮቤል ሽመልስ, ሶፍትዌር ገንቢ, ሶፍትዌር ዴቨሎፐር አዲስ አበባ, ዌብሳይት መሥራት, የሞባይል መተግበሪያ, ኤሌክትሮኒክ ደረሰኝ, ኢ-ኢንቮይስ, EIMS, የገቢዎች ሚኒስቴር, AI ቻትቦት በአማርኛ, የቴሌግራም ቦት, SEO ኢትዮጵያ, Robel Shemeles',
  name: 'አማርኛ',
  icon: 'profile',
  summary: 'አገልግሎቶቼን በአማርኛ ያንብቡ።',
  eyebrow: 'አገልግሎቶች · አዲስ አበባ',
  h1: 'ሮቤል ሽመልስ፦ የAI መሐንዲስ እና ሶፍትዌር ገንቢ በአዲስ አበባ',
  lead:
    'ለኢትዮጵያ ድርጅቶች ሙሉ ሲስተሞችን ከጅምር እስከ ፍጻሜ እገነባለሁ፦ ዌብሳይቶች እና የድርጅት ሲስተሞች፣ ኢንተርኔት ሲቋረጥም የሚሠሩ የሞባይል መተግበሪያዎች፣ በአማርኛ የሚመልሱ AI ረዳቶች እና ከገቢዎች ሚኒስቴር EIMS ጋር የሚገናኝ የኤሌክትሮኒክ ደረሰኝ ሲስተም። ከሠራኋቸው ሲስተሞች ብዙዎቹ በየቀኑ በሥራ ላይ ናቸው።',
  highlights: ['አማርኛ እና እንግሊዝኛ', '3+ ዓመት ልምድ', 'FastAPI · Go · Flutter', 'n8n · Gemini AI', '1,800+ አውቶማቲክ ቴስቶች'],
  offer: {
    eyebrow: 'አገልግሎቶች',
    heading: 'ምን ልሥራልዎ?',
    items: [
      {
        title: 'የEIMS ኤሌክትሮኒክ ደረሰኝ ውህደት',
        body: 'የPOS፣ ERP ወይም የሂሳብ ሲስተምዎን ከገቢዎች ሚኒስቴር EIMS ጋር አገናኛለሁ፦ እያንዳንዱ ደረሰኝ ተመዝግቦ የምዝገባ ቁጥር (IRN) እና QR ኮድ ያገኛል፤ በአማርኛ የሚታተሙ PDF ደረሰኞችም ይዘጋጃሉ።',
        link: eInvoicing.path,
      },
      {
        title: 'AI ቻትቦቶች እና አውቶሜሽን',
        body: 'ደንበኞችን እና ሠራተኞችን በአማርኛ እና በእንግሊዝኛ የሚያገለግሉ AI ረዳቶች፣ በቴሌግራም፣ በዌብሳይት ወይም በውስጥ ሲስተሞችዎ። የሚመልሱት ከእርስዎ መረጃ ብቻ ነው፤ ያልተፈቀደ መረጃ አያዩም።',
        link: aiAutomation.path,
      },
      {
        title: 'ዌብሳይት እና የሞባይል መተግበሪያ',
        body: 'የቀጠሮ ማስያዣ ሲስተሞች፣ ዳሽቦርዶች፣ SaaS እና ኢንተርኔት ሲቋረጥም የሚሠሩ የFlutter አንድሮይድ መተግበሪያዎች፣ ከሰርቨሩ እስከ ስልኩ።',
        link: webMobile.path,
      },
      {
        title: 'SEO እና GEO',
        body: 'ድርጅትዎ በGoogle ፍለጋ እና በChatGPT፣ Gemini እና Perplexity መልሶች ውስጥ እንዲገኝ፤ ፈጣን ዌብሳይት እና በአማርኛ እና በእንግሊዝኛ የተጻፈ ይዘት።',
        link: seoGeo.path,
      },
    ],
  },
  proof: {
    eyebrow: 'ሥራዎች',
    heading: 'የሠራኋቸው ሲስተሞች',
    items: [
      {
        title: 'DrogaBooking',
        metric: '82 endpoints · 600+ tests',
        body: 'ለበርካታ ድርጅቶች የስብሰባ ክፍል እና የሠራተኞች ቀጠሮ ማስያዣ ፕላትፎርም፤ ድርብ ቀጠሮን የሚከለክል ዳታቤዝ፣ የNext.js ዌብ እና ኢንተርኔት ሳይኖር የሚሠራ የአንድሮይድ መተግበሪያ።',
      },
      {
        title: 'DrogaPulse',
        metric: 'Live · 4 networks',
        link: 'https://drogapulse.drogatech.com',
        body: 'ወደ Facebook፣ Instagram፣ LinkedIn እና X ፖስቶችን አቅዶ የሚያወጣ SaaS፤ የኢትዮጵያ ቀን መቁጠሪያ እና በGemini የሚጻፉ ጽሑፎች አሉት።',
      },
      {
        title: 'EIMS የኤሌክትሮኒክ ደረሰኝ ፕላትፎርም',
        metric: '360+ Go tests',
        body: 'ደረሰኞችን፣ ክሬዲት እና ዴቢት ኖቶችን ከገቢዎች ሚኒስቴር EIMS ጋር የሚመዘግብ በGo የተሠራ ፕላትፎርም፤ በልማት ላይ ሲሆን የሚኒስቴሩን የእውቅና (accreditation) ሂደት እያለፈ ነው።',
      },
      {
        title: 'የፋርማሲ AI ረዳት',
        metric: '26 nodes · 5 agents',
        body: 'የመድኃኒት ክምችት ጥያቄዎችን የሚመልስ፣ የሐኪም ማዘዣ ፎቶዎችን የሚያነብ እና ክምችት ሲያልቅ የሽያጭ ቡድኑን የሚያሳውቅ ቻትቦት።',
      },
      {
        title: 'habesha-names',
        metric: 'Open source · PyPI',
        link: 'https://pypi.org/project/habesha-names/',
        body: 'የኢትዮጵያ እና የኤርትራ ስሞችን በግዕዝ እና በላቲን ፊደል፣ በተለያዩ አጻጻፎች የሚያዛምድ open-source Python ላይብረሪ።',
      },
      {
        title: 'Wuten',
        metric: '~430 tests',
        body: 'ከኢትዮጵያ ባንኮች እና ከቴሌብር የሚመጡ SMS መልዕክቶችን አንብቦ ወጪን የሚመዘግብ የFlutter መተግበሪያ፤ በጀት፣ ዕቁብ እና AI ረዳት አለው።',
      },
    ],
  },
  steps: {
    eyebrow: 'አሠራር',
    heading: 'አብረን እንዴት እንሠራለን',
    items: [
      { title: 'እንነጋገራለን', body: 'ምን ችግር መፍታት እንደሚፈልጉ እና የመጀመሪያው ስሪት ምን ማድረግ እንዳለበት በጋራ እንወስናለን።' },
      { title: 'እገነባለሁ', body: 'የሚሠራ ስሪት ቀድመው ያያሉ፤ ሥራው እያደገ ሲሄድ አስተያየት ይሰጣሉ።' },
      { title: 'እፈትሻለሁ', body: 'ዋና ዋና ሕጎች (ለምሳሌ ድርብ ቀጠሮ ወይም የተሳሳተ ድምር) በአውቶማቲክ ቴስቶች ይጠበቃሉ።' },
      { title: 'አስጀምራለሁ', body: 'ሲስተሙን ሥራ ላይ አውላለሁ፣ እከታተላለሁ፣ ባክአፕ እወስዳለሁ፤ ኮዱን እና ሰነዱን አስረክባለሁ።' },
    ],
  },
  context: {
    eyebrow: 'ለምን እኔ',
    heading: 'ለኢትዮጵያ ገበያ የተሠራ',
    items: [
      'አማርኛ የአፍ መፍቻ ቋንቋዬ ነው፤ የምሠራቸው ሲስተሞች በአማርኛ እና በእንግሊዝኛ ይሠራሉ።',
      'የኢትዮጵያን ሁኔታ አውቃለሁ፦ ቴሌብር፣ የኢትዮጵያ ቀን መቁጠሪያ፣ ደካማ ኢንተርኔት እና የገቢዎች ሚኒስቴር መስፈርቶች።',
      'ከሰርቨር እስከ ስልክ ሙሉውን ሲስተም እኔ እገነባለሁ፤ ለሁሉም አንድ ተጠያቂ ሰው።',
      'የፋይናንስ ዌብ ፕላትፎርሞችን በ99.9% አገልግሎት (uptime) አስተዳድሬያለሁ።',
    ],
  },
  faq: {
    eyebrow: 'ጥያቄዎች',
    heading: 'ተደጋግመው የሚነሱ ጥያቄዎች',
    items: [
      {
        q: 'ሮቤል ሽመልስ ማነው?',
        a: 'ሮቤል ሽመልስ አለማየሁ በአዲስ አበባ የሚገኝ የAI መሐንዲስ እና ፉል-ስታክ ሶፍትዌር ገንቢ ነው። ከ3 ዓመት በላይ ልምድ አለው፤ በአሁኑ ጊዜ በDroga Consultancy የAI ስፔሻሊስት እና ፉል-ስታክ ዴቨሎፐር ሆኖ ይሠራል። ከመቱ ዩኒቨርሲቲ በኢንፎርሜሽን ቴክኖሎጂ የመጀመሪያ ዲግሪ አግኝቷል።',
      },
      {
        q: 'EIMS ምንድን ነው?',
        a: 'EIMS የገቢዎች ሚኒስቴር የኤሌክትሮኒክ ደረሰኝ ማስተዳደሪያ ሲስተም ነው። የንግድ ሶፍትዌሮች እያንዳንዱን ደረሰኝ ወደ ሲስተሙ ይልካሉ፤ ሲስተሙም ደረሰኙን ሕጋዊ የሚያደርግ የምዝገባ ቁጥር (IRN) እና QR ኮድ ይመልሳል። ትግበራው በግብር ከፋይ ቡድኖች በየደረጃው ይካሄዳል።',
      },
      {
        q: 'በአማርኛ የሚያወራ ቻትቦት መሥራት ይቻላል?',
        a: 'አዎ። እንደ Gemini ያሉ ዘመናዊ ሞዴሎች አማርኛ ያነባሉ፣ ይጽፋሉ፣ የአማርኛ ንግግርንም ወደ ጽሑፍ ይቀይራሉ። በአማርኛ ድምፅ ምዝገባ የሚያካሂድ ሲስተም ሠርቼ ሥራ ላይ አውያለሁ።',
      },
      {
        q: 'ከአዲስ አበባ ውጭ ወይም ከውጭ ሀገር ካሉ ደንበኞች ጋር ይሠራሉ?',
        a: 'አዎ። በርቀት (remote)፣ በፍሪላንስ ወይም በአማካሪነት በመላው ኢትዮጵያ እና በውጭ ሀገር ካሉ ደንበኞች ጋር እሠራለሁ።',
      },
      {
        q: 'እንዴት ላገኝዎት እችላለሁ?',
        a: `በቴሌግራም ${contact.telegramHandle}፣ በስልክ ${contact.phoneDisplay} ወይም በኢሜይል ${contact.email}።`,
      },
    ],
  },
};

/** The English service pages, in the order the home page lists them. */
export const servicePages: PageContent[] = [eInvoicing, aiAutomation, webMobile, seoGeo];

export const contentPages: PageContent[] = [...servicePages, amharic];
