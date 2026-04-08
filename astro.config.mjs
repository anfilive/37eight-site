import { defineConfig } from 'astro/config';
import DecapCMS from 'astro-decap-cms';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://37eight.app',
  integrations: [
    react(), // Добавь это обязательно!
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
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/pages/posts',
            create: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              { name: 'publishDate', widget: 'datetime', label: 'Publish Date' },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              { name: 'layout', widget: 'hidden', default: '../../layouts/BlogPost.astro' },
            ],
          },
        ],
      },
    }),
  ],
});
