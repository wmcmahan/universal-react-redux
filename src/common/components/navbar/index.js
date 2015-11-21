import React, {Component, PropTypes, Children, cloneElement} from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import NavbarLogo from './NavbarLogo';
import Nav from './Nav';
import {styles} from '../../styles/navbar';

class Navbar extends Component {
  static propTypes = {
    fixedToTop: React.PropTypes.bool
  };

  static defaultProps = {
    fixedToTop: false
  };

  render () {
    const {
      fixedToTop
    } = this.props;

    const NAVBAR_STYLES = [
      styles.navbar,
      {position: fixedToTop ? 'fixed' : 'relative'}
    ];

    return (
      <nav style={NAVBAR_STYLES}>
        <NavbarLogo/>
        <Nav style={styles.nav}>
          <Link to={'/'}>home</Link>
        </Nav>
      </nav>
    );
  }
}

export default Radium(Navbar);
