import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; // Возвращаем импорт по умолчанию
import vercel from '@astrojs/vercel';

export default defineConfig({
  // В Astro 6 адаптер Vercel сам понимает режим работы
  adapter: vercel(), 
  integrations: [
    react(),
    sitemap(),
    sanity({ // Используем просто как sanity()
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
