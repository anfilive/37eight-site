import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; 
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'hybrid', // Гибридный режим — самый надежный
  adapter: vercel({
    webPolyfills: false // Явно отключаем то, на что ругалась ошибка
  }),
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
