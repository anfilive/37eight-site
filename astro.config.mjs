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
        enabled: false,
        basePath: '/admin',
      },
    }),
  ],
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        // Это КРИТИЧЕСКИЙ костыль для исправления ошибки coreBehaviors в Vite 6
        '@portabletext/editor/behaviors': '@portabletext/editor/lib/behaviors/index.js',
        'lodash': 'lodash-es',
      },
    },
    ssr: {
      // Заставляем Vite упаковать всё это внутрь серверного билда корректно
      noExternal: ['sanity', 'styled-components', 'lodash-es', '@portabletext/editor'],
    },
  },
});
