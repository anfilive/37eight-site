import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; 
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [
    react(),
    sanity({
      projectId: 'd4fi998k',
      dataset: 'production',
      // Отключаем авто-генерацию, чтобы файл [...index].astro заработал
      studio: { enabled: false }, 
    }),
  ],
  vite: {
    plugins: [tailwind()],
    ssr: {
      // Это лечит ошибку билда coreBehaviors
      noExternal: ['sanity', 'styled-components', 'lodash-es', '@portabletext/editor'],
    },
    optimizeDeps: {
      include: ['@portabletext/editor/behaviors'],
    },
  },
});
