import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import { sanityIntegration } from '@sanity/astro';
import netlify from '@astrojs/netlify'; // Добавили адаптер

export default defineConfig({
  output: 'server', // Это переключает сайт в режим "умного" сервера
  adapter: netlify(), // Это связывает Astro и Netlify
  integrations: [
    react(),
    sanityIntegration({
      projectId: 'd4fi998k',
      dataset: 'production',
      studioPath: '/admin', // Путь к твоей админке
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
