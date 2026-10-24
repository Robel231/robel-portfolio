import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/** Renders the page to HTML at build time, so crawlers that don't run JavaScript still read it. */
export const render = () =>
  renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
