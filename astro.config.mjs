import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { sanityIntegration } from '@sanity/astro'; // Используем именованный импорт
import vercel from '@astrojs/vercel';

export default defineConfig({
  // В Astro 6 с адаптером Vercel режим выставляется сам, 
  // но админке часто нужен серверный адаптер для работы роутинга.
  adapter: vercel(), 
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
