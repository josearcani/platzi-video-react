const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

require('dotenv').config();

module.exports = {
  entry: ['./src/frontend/index.js'],
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: 'assets/app.js',
    publicPath: '/',
  },
  mode: process.env.ENV,
  // para resolver las extensiones
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: /\.js$|\.css$/,
      filename: '[path][base].gz',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}