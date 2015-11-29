import React from 'react'
import {renderToString} from 'react-dom/server';
import {ReduxRouter} from 'redux-router';
import {reduxReactRouter, match} from 'redux-router/server';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Radium, {Style} from 'radium';
import createLocation from 'history/lib/createLocation';

import routes from '../../common/routes';
import reducers from '../../common/reducers';
import RadiumWrapper from '../../common/utils/RadiumWrapper';
import StyleResets from '../../common/styles/theme/resets';

import renderFullPage from '../views';

/**
 * ReactRouterServer:
 * @description:
 *   - duild React Router with Redux state,
 *   - normalize page with inline-resets
 * @return react page view
 */
const ReactRouterServer = (req, res) => {
  const store = reduxReactRouter({routes})(createStore)(reducers);
  const initialState = store.getState();
  const location = createLocation(req.url);
  const userAgent = req.headers['user-agent'];

  store.dispatch(match(location, (error, redirectLocation, renderProps) => {
    if (!renderProps) {
      return res.status(404).end('Not found');
    }

    const styleReset = renderToString(
      <Style rules={StyleResets}/>
    );

    const componentHTML = renderToString(
      <Provider store={store}>
        <RadiumWrapper radiumConfig={{userAgent: userAgent}}>
          <ReduxRouter/>
        </RadiumWrapper>
      </Provider>
    );

    res.send(renderFullPage(componentHTML, styleReset, initialState));
  }));
};

export default ReactRouterServer;
