import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { sanityIntegration } from '@sanity/astro'; // Изменено название функции

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanityIntegration({
      projectId: 'd4fi998k',
      dataset: 'production',
      studioPath: '/admin',
      useCdn: false,
    }),
  ],
});
