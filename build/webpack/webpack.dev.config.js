const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');

const config = Object.assign({}, baseConfig, {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client'
  ],
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __PROD__: false,
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
