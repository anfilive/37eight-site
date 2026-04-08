import { defineConfig } from 'astro/config';
import DecapCMS from 'astro-decap-cms';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://37eight.app',
  integrations: [
    react(),
    DecapCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'latest',
        },
        media_folder: 'public/assets/blog',
        public_folder: '/assets/blog',
        collections: [
          {
            name: 'blog',
            label: 'Статьи',
            folder: 'src/pages/posts',
            create: true,
            fields: [
              { label: 'Title', name: 'title', widget: 'string' },
              { label: 'Body', name: 'body', widget: 'markdown' },
            ],
          },
        ],
      },
    }),
  ],
});
