require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res) => {
    res.send("Hello word! on twitter page");
})

app.get('/login',(req,res) => {
    res.send('<h1>hello</h1>');
})

app.listen(process.env.Port, () => {
  console.log(`Example app listening on port ${process.env.Port}`);
});