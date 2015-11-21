import {createStore, applyMiddleware, compose} from 'redux';
import {reduxReactRouter} from 'redux-router';
import thunk from 'redux-thunk';
import {createHistory} from 'history';
import routes from '../routes';
import rootReducer from '../reducers'

export default function (initialState) {
  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
