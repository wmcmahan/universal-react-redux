import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import Navbar from '../components/navbar';

const styles = {
  base: {
    background: '#ccc',
    ':hover': {
      background: '#000'
    }
  }
};

class AppRoot extends Component {
  render () {
    return (
      <div style={styles.base}>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

connect(
  state => ({})
)(AppRoot);

export default Radium(AppRoot);
