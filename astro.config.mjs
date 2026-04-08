import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { sanity } from '@sanity/astro'; // Исправлено здесь

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: 'd4fi998k',
      dataset: 'production',
      studioPath: '/admin', // Админка будет тут
      useCdn: false,
    }),
  ],
});
