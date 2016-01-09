import {createStore, applyMiddleware, compose} from 'redux';
import {reduxReactRouter} from 'redux-router';
import thunk from 'redux-thunk';
import {createHistory} from 'history';
import routes from '../routes';
import rootReducer from '../reducers';
import logger from 'redux-logger';

let middlewareList = [
  thunk
];

if (module.hot) {
  middlewareList.push(require('redux-logger')());
}

export default function (initialState) {
  const store = compose(
    applyMiddleware(...middlewareList),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
