require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please Login this Page</h1>');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || port}`);
});