import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'; // Обновленный инструмент

export default defineConfig({
  name: 'default',
  title: '37.Eight Studio',
  projectId: 'd4fi998k',
  dataset: 'production',
  basePath: '/admin', 

  plugins: [structureTool()], // Используем новый стандарт

  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Журнал',
        fields: [
          { name: 'title', type: 'string', title: 'Заголовок' },
          { name: 'content', type: 'text', title: 'Текст статьи' }
        ]
      }
    ],
  },
});
