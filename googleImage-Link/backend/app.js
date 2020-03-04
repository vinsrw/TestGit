const express = require('express');

const app = express();

app.use((req, res, next)  => {
  console.log('Middleware');
  next();
})

app.use((req, res, next)  =>{
  res.send('Hello from express 2');
})

module.exports = app;
