const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');

const config = Object.assign({}, baseConfig, {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    ...baseConfig.entry.bundle
  ],
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __PROD__: false,
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

module.exports = config;
