import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Formatseiten mit fremdem Canonical (z. B. Pater Brown → paterbrown.com/live-hoerspiel/) gehören nicht in die Sitemap.
const fremdKanonisch = readdirSync('./src/content/formate')
  .filter(f => f.endsWith('.json'))
  .filter(f => JSON.parse(readFileSync(`./src/content/formate/${f}`, 'utf8')).links?.canonical)
  .map(f => `/formate/${f.replace(/\.json$/, '')}/`);

export default defineConfig({
  site: 'https://krimi.live',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({ filter: (page) => !fremdKanonisch.some(p => page.endsWith(p)) }),
  ],
});
