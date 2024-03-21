import express from 'express';
import { createServer } from 'vite';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});

app.use(vite.middlewares);
app.use(express.static('dist/client'));

app.use('*', async (req, res) => {
  const url = req.originalUrl

  let template = fs.readFileSync(toAbsolute('../index.html'), 'utf-8');
  template = await vite.transformIndexHtml(url, template);

  const location = req?.baseUrl?.split('/')[req?.baseUrl?.split('/')?.length - 1] || '';

  try {
    const { SSRRender } = await vite.ssrLoadModule('src/entry/users.server.tsx');

    const appHtml = SSRRender(location);
    const html = template.replace(`<!--static-html-->`, appHtml);

    return res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    res.status(500).end(error);
  }
});

app.listen(8888, () => {
  console.log('SSG DEV => http://localhost:8888 🚀 🌔');
});
