const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      'isomorphic-fetch',
      './src/client/index'
    ]
  },
  output: {
    path: path.join(__dirname, '../../dist/client'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.jsx', '.css', '.js', '.json'],
    root: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'css?modules&sourceMap&localIdentName=[path][name]---[local]---[hash:base64:5]'
      }
    ]
  },
  plugins: []
}
