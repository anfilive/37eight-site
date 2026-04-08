// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: '37.Eight Studio',

  // Твои данные из проекта
  projectId: 'd4fi998k',
  dataset: 'production',

  // Это путь, по которому админка будет искать себя в браузере.
  // Должно совпадать с папкой в src/pages/
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
            title: 'URL адрес (ссылка)',
            description: 'Нажми "Generate" после ввода заголовка',
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
              hotspot: true, // Позволяет выбирать центр композиции на фото
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
