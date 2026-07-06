const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Heyy kareeem');
});

app.get('/goat', (req, res) => {
  res.send('CR7 is the GOAT');
});


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});