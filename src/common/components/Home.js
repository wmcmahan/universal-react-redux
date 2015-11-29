import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  div: {
    backgroundColor: '#000',
    ':hover': {
      backgroundColor: 'red'
    }
  }
};

class Home extends Component {
  render () {
    return (
      <div>
        <div style={styles.div}>Home</div>
      </div>
    );
  }
}

export default Radium(Home);
