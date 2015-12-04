import React, {Component} from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

class AppRoot extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  state => ({
    routerState: state.router
  })
)(AppRoot);;
