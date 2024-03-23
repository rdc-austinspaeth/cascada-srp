import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('../dist/client/index.html'), 'utf-8');
const SSRRender = (await import('../dist/server/assets/index.js')).SSRRender;

(async () => {
  const cssAssets = fs.readdirSync("./dist/client/assets").filter((asset => asset.endsWith('.css'))).map((asset) => `/assets/${asset}`);

  const appHtml = SSRRender(cssAssets);

  const html = template.replace(`<!--static-html-->`, appHtml);

  const filePath = `../dist/client/index.html`;
  fs.writeFileSync(toAbsolute(filePath), html);
})();
