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
      // Собираем всё в один бандл, чтобы избежать ошибок импорта
      noExternal: [/sanity/, /@sanity\//, /@portabletext\//, 'styled-components', 'lodash'],
    },
    resolve: {
      alias: {
        // Это лечит проблемы с глубокими импортами в некоторых версиях Sanity
        'lodash': 'lodash-es',
      },
    },
  },
});
