import webpack from 'webpack';
import baseConfig from './webpack.base.config.js';

const config = {...baseConfig, ...{
  devtool: 'eval-cheap-module-source-map',
  entry: [
    ...baseConfig.entry,
    'webpack-hot-middleware/client'
  ],
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      __DEV__: true,
      __PROD__: false,
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}};

export default config;
