import React, {Component} from 'react';
import Radium from 'radium';

class RadiumWrapper extends Component {
  render () {
    return this.props.children;
  }
};

export default Radium(RadiumWrapper);
