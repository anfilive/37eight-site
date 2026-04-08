// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  title: '37.Eight Studio',

  // Твои данные проекта
  projectId: 'd4fi998k',
  dataset: 'production',

  // Путь должен строго совпадать с папкой в src/pages/
  basePath: '/admin', 

  plugins: [structureTool()],

  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Журнал',
        fields: [
          { 
            name: 'title', 
            type: 'string', 
            title: 'Заголовок',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'URL адрес',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          { 
            name: 'content', 
            type: 'text', 
            title: 'Текст статьи' 
          },
          {
            name: 'mainImage',
            type: 'image',
            title: 'Главное изображение',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Дата публикации',
          },
        ],
      },
    ],
  },
});
 
