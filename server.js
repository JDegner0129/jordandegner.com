const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const server = app.listen(1337, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Website server listening at http://${host}:${port}`);
});
