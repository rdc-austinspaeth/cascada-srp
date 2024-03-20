import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist/client'), { index: false }));

app.use('*', async (req, res) => {
  try {
    const { SSRRender } = await import('../dist/server/bots.server.js');
    const { getTestData } = await import('../dist/data/data.js');

    const location = req?.baseUrl?.split('/')[req?.baseUrl?.split('/')?.length - 1] || '';

    const data = await getTestData();

    SSRRender(data, location, res);
  } catch (error) {
    res.status(500).end(error);
  }
});

app.listen(8888, () => {
  console.log('SSR SERVE => http://localhost:8888 🚀 🌔');
});
