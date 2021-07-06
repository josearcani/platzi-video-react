import express from 'express';
import webpack from 'webpack';

import config from  './config';

const { ENV, PORT } = config;

const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler)); // hacer el hot module replacement de todo el proyecto
}

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://i.postimg.cc/T16gVyD6/badge.png" type="image/x-icon">
    <title>Platzi Video con React</title>
    <link rel="stylesheet" href="assets/app.css" type="text/css">
  </head>
  <body>
    <div id="app"></div>
    <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>
  `);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});