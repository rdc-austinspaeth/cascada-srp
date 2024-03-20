import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('../dist/client/index.html'), 'utf-8');
const render = (await import('../dist/server/users.server.js')).SSRRender;

(async () => {
  const appHtml = render('slug');

  const html = template.replace(`<!--static-html-->`, appHtml);

  const filePath = `../dist/client/index.html`;
  fs.writeFileSync(toAbsolute(filePath), html);
})();
