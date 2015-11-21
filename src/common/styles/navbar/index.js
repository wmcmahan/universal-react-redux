const NAVBAR_COLOR = 'red';
const NAVBAR_HEIGHT = '20px';

export const styles = {
  navbar: {
    display: 'flex',
    backgroundColor: NAVBAR_COLOR,
    marginBottom: 0,
    paddingLeft: 0,
    listStyle: 'none',
    height: NAVBAR_HEIGHT,
    display: 'block',
    width: '100%'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    padding: 0
  },
  navItem: {
    flexGrow: 1,
    textAlign: 'center'
  },
  navbarLogo: {
    flexGrow: 1,
    float: 'left',
    height: NAVBAR_HEIGHT,
    width: NAVBAR_HEIGHT,
  }
};
