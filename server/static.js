import express from 'express';

const app = express();

app.use(express.static('dist/client'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'dist/client' });
});

app.listen(8888, () => {
  console.log('STATIC SERVE => http://localhost:8888 🚀 🌔');
});
