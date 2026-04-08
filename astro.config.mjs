import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; 
import vercel from '@astrojs/vercel'; // Добавляем адаптер Vercel

export default defineConfig({
  output: 'server', // Включаем серверный режим
  adapter: vercel(), // Подключаем адаптер
  integrations: [
    react(),
    sitemap(),
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
