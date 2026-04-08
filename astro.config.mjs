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
      // Мы захватываем все пакеты Sanity и lodash в общий билд
      noExternal: [/sanity/, /@sanity\//, /@portabletext\//, 'styled-components', 'lodash'],
    },
    resolve: {
      // Принудительно используем ESM версию lodash, если она есть
      alias: {
        'lodash': 'lodash-es',
      },
    },
  },
});
