import React, {Component} from 'react';
import Radium, {Style} from 'radium';

const styles = {
  div: {
    backgroundColor: '#000'
  },
  mediaQueries: {
    '(max-width: 600px)': {
      div: {
        background: 'gray'
      }
    },
    '(max-width: 500px)': {
      div: {
        background: 'blue'
      }
    }
  }
}

class Home extends Component {
  render () {
    return (
      <div className="scoping-class">
        <Style
          scopeSelector=".scoping-class"
          rules={styles}
        />
        <div>Home</div>
      </div>
    );
  }
}

export default Radium(Home);
