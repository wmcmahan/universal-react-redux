const path = require('path');

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
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: []
}
