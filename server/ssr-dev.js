import express from 'express';
import { createServer } from 'vite';
import { resolve } from 'path';
import fs from 'node:fs';

const app = express();

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use((await import('compression')).default());
  app.use(
    (await import('serve-static')).default(resolve('dist/client'), {
      index: false,
    }),
  );

app.use('*', async (req, res) => {
  const location = req?.baseUrl?.split('/')[req?.baseUrl?.split('/')?.length - 1] || '';

  try {
    const { SSRRender } = await vite.ssrLoadModule('src/entry/bots.server.tsx');
    const { getTestData } = await vite.ssrLoadModule('src/data.ts');

    const cssAssets = fs.readdirSync("./dist/client/assets").filter((asset => asset.endsWith('.css'))).map((asset) => `/assets/${asset}`);
    const data = await getTestData();

    SSRRender(data, location, res, cssAssets);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    res.status(500).end(error);
  }
});

app.listen(8888, () => {
  console.log('SSR DEV => http://localhost:8888 🚀 🌔');
});
