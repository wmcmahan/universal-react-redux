const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/server/views/index',
  target: "node",
  output: {
    path: path.join(__dirname, '../../dist/server'),
    filename: "./views/index.js",
    libraryTarget: "commonjs2",
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(png|woff|ttf|svg)$/,
        loader: 'url'
      },
      {
        test: /\.eot$/,
        loader: 'file'
      },
      {
        test: /\.css$/,
        loader: 'css'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
