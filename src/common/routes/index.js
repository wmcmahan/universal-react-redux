import React, {Component} from 'react';
import {IndexRoute, Route} from 'react-router';
import App from '../containers';
import Home from '../containers/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);
