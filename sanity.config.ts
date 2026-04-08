import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
  name: 'default',
  title: '37.Eight Studio',
  projectId: 'd4fi998k',
  dataset: 'production',

  basePath: '/admin', // ЭТО КРИТИЧНО! Должно совпадать с studioPath

  plugins: [deskTool()],

  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Журнал',
        fields: [
          { name: 'title', type: 'string', title: 'Заголовок' },
          { name: 'image', type: 'image', title: 'Обложка' }
        ]
      }
    ],
  },
});
