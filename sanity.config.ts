import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  projectId: 'd4fi998k',
  dataset: 'production',
  title: '37.Eight Studio',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Журнал',
        fields: [
          { name: 'title', type: 'string', title: 'Заголовок' },
          { name: 'content', type: 'text', title: 'Текст' }
        ]
      }
    ]
  }
});
