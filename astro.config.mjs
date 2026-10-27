import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://krimi.live',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Formatseite ist kanonisch auf paterbrown.com/live-hoerspiel/ – nicht in die Sitemap.
      filter: (page) => !page.includes('/formate/pater-brown/'),
    }),
  ],
});
