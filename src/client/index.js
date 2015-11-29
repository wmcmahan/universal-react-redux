import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import RadiumWrapper from '../common/utils/RadiumWrapper';
import routes from '../common/routes';
import configureStore from '../common/store';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <RadiumWrapper>
      <ReduxRouter routes={routes}/>
    </RadiumWrapper>
  </Provider>,
  document.getElementById('app')
);
