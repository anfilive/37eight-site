import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; 
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      projectId: 'd4fi998k',
      dataset: 'production',
      // Эта настройка сама создаст страницу /admin без твоего участия
      studio: {
        enabled: true,
        basePath: '/admin',
      },
    }),
  ],
  vite: {
    plugins: [tailwind()],
    ssr: {
      // Это лечит ошибку "coreBehaviors is not exported"
      noExternal: ['sanity', 'styled-components', '@sanity/visual-editing', 'lodash']
    },
    optimizeDeps: {
      exclude: ['sanity']
    }
  },
});
