import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import webpack from 'webpack';
import webpackConfig from '../../build/webpack/webpack.dev.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import ReactRouter from './routes';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

/**
 * dev env: using webpack dev middleware
 * prod env: static assets in dist directory
 */
if (app.get('env') === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use('/static', express.static(path.join(__dirname, '../../dist/client')));
}

/**
 * React Router for routing
 */
app.use(ReactRouter);

export default app;
