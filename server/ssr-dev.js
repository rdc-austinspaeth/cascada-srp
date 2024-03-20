import express from 'express';
import { createServer } from 'vite';

const app = express();

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res) => {
  const location = req?.baseUrl?.split('/')[req?.baseUrl?.split('/')?.length - 1] || '';

  try {
    const { SSRRender } = await vite.ssrLoadModule('src/entry/bots.server.tsx');
    const { getTestData } = await vite.ssrLoadModule('src/data.ts');

    const data = await getTestData();
    SSRRender(data, location, res);
  } catch (error) {
    res.status(500).end(error);
  }
});

app.listen(8888, () => {
  console.log('SSR DEV => http://localhost:8888 🚀 🌔');
});
