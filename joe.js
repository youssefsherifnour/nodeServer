const express = require('express');
const app = express();
app.use(express.json());

const names = [];

app.get('/names', (req, res) => {
  res.json(names);
});

app.post('/names', (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.status(201).json({ message: 'Name added!', name: name });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});