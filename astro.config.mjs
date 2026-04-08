import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { sanityIntegration } from 'astro-sanity';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanityIntegration({
      projectId: 'd4fi998k',
      dataset: 'production',
      apiVersion: '2024-04-08',
      useCdn: false,
      studioPath: '/admin', // Вот тут и будет жить твоя админка!
    }),
  ],
});
