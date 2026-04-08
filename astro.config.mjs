import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; // Импорт по умолчанию — самый надежный

export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    // Используем просто sanity() вместо sanityIntegration()
    sanity({
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
