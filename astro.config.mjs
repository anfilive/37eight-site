import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; 
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Удалили "hybrid", теперь Astro 6 будет счастлив
  output: 'static', 
  adapter: vercel({
    webPolyfills: false 
  }),
  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: 'd4fi998k',
      dataset: 'production',
      studioPath: '/admin', // Твоя красивая админка будет тут
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
