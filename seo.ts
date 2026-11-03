import type { HomeRoute, PageContent, Route } from './types';
import { contact, contentPages, servicePages } from './content/pages';

// Everything a crawler reads outside the page body: <head> tags, JSON-LD and the sitemap, per route.
// scripts/prerender.js writes them into each page at build time; vite.config.ts does the same in dev.

/** The live origin. Moving to a custom domain starts here, then robots.txt and llms.txt. */
export const SITE_URL = 'https://robel-portfolio-ten.vercel.app';

const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const CV_UPDATED = '2026-10-17';
const LLMS_UPDATED = '2026-11-03';

export const home: HomeRoute = {
  kind: 'home',
  path: '/',
  lang: 'en',
  updated: '2026-11-03',
  title: 'Robel Shemeles | AI & Full-Stack Developer in Addis Ababa',
  description:
    'AI Engineer and Full-Stack Developer in Addis Ababa: EIMS e-invoicing, Amharic AI chatbots, Go and FastAPI backends, Next.js and Flutter apps, SEO and GEO.',
  keywords:
    'Robel Shemeles, Robel Shimeles, ሮቤል ሽመልስ, AI Engineer Ethiopia, Full-Stack Developer Addis Ababa, software developer Ethiopia, Ethiopian software engineer, remote developer Ethiopia, EIMS e-invoicing, Amharic AI chatbot, Telegram bot developer, Python, FastAPI, Go, Golang, React, Next.js, Flutter, PostgreSQL, n8n, Gemini, SEO, GEO, Addis Ababa, Ethiopia',
};

export const routes: Route[] = [home, ...contentPages];

/** The route for a URL; anything unknown renders the home page (production answers it with a 404 instead). */
export const findRoute = (url: string): Route => {
  const path = url.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  return routes.find((r) => r.path === path) ?? home;
};

export const urlFor = (path: string) => (path === '/' ? `${SITE_URL}/` : SITE_URL + path);

/** The profile exists in both languages; the service pages are English only. */
const languageVersions = { en: '/', am: '/am' } as const;
const hasLanguageVersions = (route: Route) => Object.values(languageVersions).includes(route.path as '/' | '/am');

const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Robel Shemeles Alemayhu',
  givenName: 'Robel',
  familyName: 'Shemeles',
  alternateName: ['Robel Shemeles', 'Robel Shimeles', 'ሮቤል ሽመልስ'],
  jobTitle: 'AI Engineer & Full-Stack Developer',
  description:
    "AI Engineer and Full-Stack Developer in Addis Ababa, Ethiopia, with 3+ years building and running production systems end to end: FastAPI and Go backends, a Go e-invoicing platform for the Ministry of Revenue's EIMS, React and Next.js web apps, Flutter mobile apps, and AI assistants on n8n and Gemini.",
  url: `${SITE_URL}/`,
  image: 'https://avatars.githubusercontent.com/u/141173346?v=4',
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: { '@type': 'PostalAddress', addressLocality: 'Addis Ababa', addressCountry: 'ET' },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'AI Engineer & Full-Stack Developer',
    occupationLocation: { '@type': 'City', name: 'Addis Ababa' },
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Mettu University' },
  worksFor: { '@type': 'Organization', name: 'Droga Consultancy', url: 'https://drogaconsulting.com' },
  knowsLanguage: ['en', 'am'],
  knowsAbout: [
    'Artificial Intelligence', 'AI Agents', 'Amharic language technology', 'Python', 'FastAPI', 'Go',
    'Electronic invoicing (EIMS)', 'React', 'Next.js', 'Flutter', 'PostgreSQL', 'n8n', 'Gemini',
    'Telegram bots', 'Docker', 'SEO', 'Generative Engine Optimisation',
  ],
  makesOffer: servicePages.map((page) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', '@id': `${urlFor(page.path)}#service`, name: page.name, url: urlFor(page.path) },
  })),
  sameAs: [
    'https://github.com/Robel231',
    'https://www.linkedin.com/in/robel-shimeles-154b5a3b8',
    contact.telegram,
    'https://pypi.org/project/habesha-names/',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Robel Shemeles',
  inLanguage: ['en', 'am'],
  publisher: { '@id': person['@id'] },
};

const areaServed = [
  { '@type': 'Country', name: 'Ethiopia' },
  { '@type': 'City', name: 'Addis Ababa' },
];

const contentNodes = (page: PageContent, url: string, homeLabel: string) => [
  {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel, item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.name, item: url },
    ],
  },
  {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: page.lang,
    isPartOf: { '@id': `${url}#webpage` },
    mainEntity: page.faq.items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
];

const jsonLd = (route: Route) => {
  const url = urlFor(route.path);
  const page = {
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: route.lang,
    isPartOf: { '@id': website['@id'] },
    primaryImageOfPage: OG_IMAGE,
    dateModified: route.updated,
  };
  const graph: object[] = [website, person];

  if (route.kind === 'service') {
    graph.push(
      { '@type': 'WebPage', ...page, about: { '@id': `${url}#service` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: route.name,
        serviceType: route.serviceType,
        description: route.summary,
        url,
        provider: { '@id': person['@id'] },
        areaServed,
        availableLanguage: ['en', 'am'],
      },
      ...contentNodes(route, url, 'Home'),
    );
  } else {
    graph.push({ '@type': 'ProfilePage', ...page, mainEntity: { '@id': person['@id'] } });
    if (route.kind === 'profile') graph.push(...contentNodes(route, url, 'መነሻ'));
  }

  // Escape "<" so no string in the data can close the <script> early
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replace(/</g, '\\u003c');
};

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const meta = (name: string, content: string) => `<meta name="${name}" content="${attr(content)}">`;
const property = (prop: string, content: string) => `<meta property="${prop}" content="${attr(content)}">`;

/** The SEO part of <head> for one route: title, description, canonical, hreflang, social cards and JSON-LD. */
export const headFor = (route: Route) => {
  const url = urlFor(route.path);
  const isProfile = route.kind !== 'service';
  const imageAlt = 'Robel Shemeles, AI Engineer and Full-Stack Developer in Addis Ababa, Ethiopia';
  const locale = route.lang === 'am' ? 'am_ET' : 'en_US';

  const tags = [
    `<title>${attr(route.title)}</title>`,
    meta('description', route.description),
    meta('author', 'Robel Shemeles Alemayhu'),
    meta('keywords', route.keywords),
    meta('robots', 'index, follow, max-image-preview:large, max-snippet:-1'),
    meta('geo.region', 'ET-AA'),
    meta('geo.placename', 'Addis Ababa, Ethiopia'),
    `<link rel="canonical" href="${url}">`,
  ];
  if (hasLanguageVersions(route)) {
    tags.push(
      ...Object.entries(languageVersions).map(([lang, path]) => `<link rel="alternate" hreflang="${lang}" href="${urlFor(path)}">`),
      `<link rel="alternate" hreflang="x-default" href="${urlFor(languageVersions.en)}">`,
    );
  }
  tags.push(
    property('og:type', isProfile ? 'profile' : 'website'),
    property('og:site_name', 'Robel Shemeles'),
    property('og:locale', locale),
    ...(hasLanguageVersions(route) ? [property('og:locale:alternate', route.lang === 'am' ? 'en_US' : 'am_ET')] : []),
    property('og:url', url),
    property('og:title', route.title),
    property('og:description', route.description),
    property('og:image', OG_IMAGE),
    property('og:image:type', 'image/jpeg'),
    property('og:image:width', '1200'),
    property('og:image:height', '630'),
    property('og:image:alt', imageAlt),
    ...(isProfile ? [property('profile:first_name', 'Robel'), property('profile:last_name', 'Shemeles')] : []),
    meta('twitter:card', 'summary_large_image'),
    meta('twitter:title', route.title),
    meta('twitter:description', route.description),
    meta('twitter:image', OG_IMAGE),
    meta('twitter:image:alt', imageAlt),
    `<script type="application/ld+json">\n${jsonLd(route)}\n  </script>`,
  );
  return tags.join('\n  ');
};

/** sitemap.xml: every route plus the CV and llms.txt, with the two language versions of the profile linked. */
export const sitemapXml = () => {
  const entry = (loc: string, lastmod: string, alternates = '') =>
    `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}  </url>`;
  const alternatesFor = (route: Route) =>
    hasLanguageVersions(route)
      ? Object.entries(languageVersions)
          .map(([lang, path]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${urlFor(path)}"/>\n`)
          .join('')
      : '';

  const urls = [
    ...routes.map((route) => entry(urlFor(route.path), route.updated, alternatesFor(route))),
    entry(`${SITE_URL}/Robel_Shemeles_CV.pdf`, CV_UPDATED),
    entry(`${SITE_URL}/llms.txt`, LLMS_UPDATED),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
};
