const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: [
      ...baseConfig.entry.bundle
    ]
  },
  output: baseConfig.output,
  resolve: {
    extensions: [
      ...baseConfig.resolve.extensions
    ],
    modulesDirectories: [
      ...baseConfig.resolve.modulesDirectories
    ]
  },
  module: {
    loaders: [
      ...baseConfig.module.loaders
    ]
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      __DEV__: false,
      __PROD__: true,
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
