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
      studio: { enabled: false }, // Отключаем авто-админку, используем ручную
    }),
  ],
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        // МЫ ТЫКАЕМ ВАЙТ НОСОМ В НУЖНЫЙ ФАЙЛ
        '@portabletext/editor/behaviors': '@portabletext/editor',
        'lodash': 'lodash',
      },
    },
    ssr: {
      // Собираем всё в один кулак, чтобы не было внешних конфликтов
      noExternal: true, 
    },
  },
});
