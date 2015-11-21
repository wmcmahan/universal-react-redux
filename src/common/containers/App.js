import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/navbar';

class AppRoot extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

connect(
  state => ({})
)(AppRoot);

export default AppRoot;
