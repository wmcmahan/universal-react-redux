import React, {Component, Children, cloneElement} from 'react';
import {styles} from '../../styles/navbar';

class Nav extends Component {
  render () {
    return (
      <div style={styles.nav}>
        {Children.map(this.props.children, (child, index) =>
          cloneElement(child, {...{
            key: index,
            style: styles.navItem
          }, ...child.props})
        )}
      </div>
    );
  }
}

export default Nav;