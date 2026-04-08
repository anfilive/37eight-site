import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { sanityIntegration } from '@sanity/astro';

export default defineConfig({
  // Удалили output: 'server' и adapter: netlify()
  // Теперь сайт будет статическим и максимально надежным
  integrations: [
    react(),
    sitemap(),
    sanityIntegration({
      projectId: 'd4fi998k',
      dataset: 'production',
      studioPath: '/admin',
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
