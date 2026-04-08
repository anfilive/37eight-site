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
      studio: {
        enabled: true,
        basePath: '/admin',
      },
    }),
  ],
  vite: {
    plugins: [tailwind()],
    ssr: {
      // Это ВАЖНО: говорим серверу не трогать пакеты админки
      external: ['sanity', 'styled-components', '@portabletext/editor']
    },
    resolve: {
      alias: {
        // Решает проблемы с импортом lodash
        'lodash': 'lodash'
      }
    }
  },
});
