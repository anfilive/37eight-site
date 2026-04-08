import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { sanityIntegration } from '@sanity/astro'; // Проверь именно этот импорт
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Режим 'server' обязателен для работы админки на Vercel
  output: 'server', 
  adapter: vercel(), 
  integrations: [
    react(),
    sitemap(),
    sanityIntegration({
      projectId: 'd4fi998k',
      dataset: 'production',
      studioPath: '/admin', // Это адрес двери
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
 
