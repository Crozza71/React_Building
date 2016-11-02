import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Stampede Runners, on your marks!    </h1>
        </div>       
    );
  }
}


Header.contextTypes = {
  router:React.PropTypes.object
}
export default Header;