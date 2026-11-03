import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { findRoute, headFor } from './seo';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // In dev, fill each page's <head> the way scripts/prerender.js does for the build
        {
          name: 'route-head',
          apply: 'serve',
          transformIndexHtml(html, ctx) {
            const route = findRoute(ctx.originalUrl ?? ctx.path);
            return html
              .replace('<html lang="en"', () => `<html lang="${route.lang}"`)
              .replace('<!--app-head-->', () => headFor(route));
          },
        },
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
