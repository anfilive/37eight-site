import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import sanity from '@sanity/astro'; // Импортируем без фигурных скобок

export default defineConfig({
  integrations: [
    react(),
    sanity({ // Используем просто как sanity()
      projectId: 'd4fi998k',
      dataset: 'production',
      studioPath: '/admin',
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
