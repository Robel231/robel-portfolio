// Runs after the client and SSR builds: renders the app to HTML and writes it into dist/index.html.
import { readFile, rm, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const indexPath = new URL('dist/index.html', root);
const ssrDir = new URL('dist-ssr/', root);

const { render } = await import(new URL('entry-server.js', ssrDir).href);
const template = await readFile(indexPath, 'utf8');

const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error(`prerender: ${placeholder} not found in dist/index.html`);

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log('prerender: wrote dist/index.html');
