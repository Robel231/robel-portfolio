import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export { routes, headFor, sitemapXml } from './seo';

/** Renders one page to HTML at build time, so crawlers that don't run JavaScript still read it. */
export const render = (path: string) =>
  renderToString(
    <React.StrictMode>
      <App path={path} />
    </React.StrictMode>
  );
