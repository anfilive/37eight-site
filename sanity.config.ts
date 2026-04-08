import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
  name: 'default',
  title: '37.Eight Studio',

  projectId: 'd4fi998k', // Твой ID проекта
  dataset: 'production',

  basePath: '/admin', // КРИТИЧНО: говорит админке, где её дом

  plugins: [deskTool()],

  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Журнал (Статьи)',
        fields: [
          { name: 'title', type: 'string', title: 'Заголовок' },
          { name: 'content', type: 'text', title: 'Текст статьи' },
          { name: 'image', type: 'image', title: 'Главное фото', options: { hotspot: true } }
        ]
      }
    ],
  },
});
