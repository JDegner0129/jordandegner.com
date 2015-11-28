const express = require('express');
const fs = require('fs');

const read = fs.readFileSync;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(read('./public/index.html', 'utf8'));
});

const server = app.listen(process.env.PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Website server listening at http://${host}:${port}`);
});
