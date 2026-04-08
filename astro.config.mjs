import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; 
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: 'd4fi998k',
      dataset: 'production',
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwind()],
    ssr: {
      // Мы говорим Vite НЕ трогать эти пакеты при сборке сервера
      external: ['@portabletext/editor', 'sanity', 'styled-components']
    },
    resolve: {
      alias: {
        // Перенаправляем все запросы lodash на lodash-es
        'lodash': 'lodash-es',
        'lodash/startCase.js': 'lodash-es/startCase.js',
      },
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/],
      },
    },
  },
});
