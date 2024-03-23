import fs from 'node:fs';

const content = '<!--static-html--><script type="module" src="/src/entry/users.client.tsx"></script>';

fs.writeFile('./index.html', content, err => {
  if (err) {
    return;
  } else {
    return;
  }
});
