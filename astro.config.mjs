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
      // Это заставляет Vite упаковывать эти библиотеки внутрь билда
      noExternal: [/sanity/, /@sanity\//, /@portabletext\//, 'styled-components', 'lodash'],
    },
    resolve: {
      alias: {
        // Решает проблему с импортом лодаша на 75-й строке
        'lodash': 'lodash-es',
      },
    },
  },
});
