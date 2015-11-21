import React, {Component, PropTypes} from 'react';
import {styles} from '../../styles/navbar';

class NavbarLogo extends Component {
  render () {
    return (
      <div style={styles.navbarLogo}>
        {this.props.children}
      </div>
    );
  }
}

export default NavbarLogo;
