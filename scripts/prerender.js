// Runs after the client and SSR builds: renders every route to HTML with its own <head>
// (seo.ts) into dist/<path>/index.html, and writes dist/sitemap.xml.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const dist = new URL('dist/', root);
const ssrDir = new URL('dist-ssr/', root);

const { render, routes, headFor, sitemapXml } = await import(new URL('entry-server.js', ssrDir).href);
const template = await readFile(new URL('index.html', dist), 'utf8');

const placeholders = { root: '<div id="root"></div>', head: '<!--app-head-->', lang: '<html lang="en"' };
for (const p of Object.values(placeholders)) {
  if (!template.includes(p)) throw new Error(`prerender: ${p} not found in dist/index.html`);
}

for (const route of routes) {
  // Replacer functions, so a "$" in the content isn't read as a replacement pattern
  const html = template
    .replace(placeholders.lang, () => `<html lang="${route.lang}"`)
    .replace(placeholders.head, () => headFor(route))
    .replace(placeholders.root, () => `<div id="root">${render(route.path)}</div>`);

  // "/" → dist/index.html, "/services/seo-geo" → dist/services/seo-geo/index.html
  const dir = new URL(route.path === '/' ? './' : `.${route.path}/`, dist);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL('index.html', dir), html);
  console.log(`prerender: ${route.path}`);
}

await writeFile(new URL('sitemap.xml', dist), sitemapXml());
await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: wrote ${routes.length} pages and sitemap.xml`);
