import express from 'express';

import config from  './config';

const { ENV, PORT } = config;

const app = express();

if (ENV === 'development') {
  console.log('Development config');
}

app.get('*', (req, res) => {
  res.send({ hello: "express, hola" });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});