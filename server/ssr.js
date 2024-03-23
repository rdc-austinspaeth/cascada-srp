import express from 'express';
import fs from 'node:fs';

const app = express();

app.use(express.static('dist/client'));

app.use('*', async (req, res) => {
  const location = req?.baseUrl?.split('/')[req?.baseUrl?.split('/')?.length - 1] || '';

  try {
    const { SSRRender } = await import('../dist/server/assets/index.js');
    const { getTestData } = await import('../dist/data/assets/index.js');

    const cssAssets = fs.readdirSync("./dist/client/assets").filter((asset => asset.endsWith('.css'))).map((asset) => `/assets/${asset}`);
    const data = await getTestData();

    SSRRender(data, location, res, cssAssets);
  } catch (error) {
    res.status(500).end(error);
  }
});

app.listen(8888, () => {
  console.log('SSR SERVE => http://localhost:8888 🚀 🌔');
});
