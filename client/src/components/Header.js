import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
  clickHeader = () => {
    location.reload();
  }

  render () {
    return (
      <div className="Header">
        <h1 className="Amp-Title"
          onClick={this.clickHeader}>AmpSearch</h1>
  {/*      <h2><span className="Header-Section">About</span></h2>*/}
      </div>
    );
  }
}

export default Header;
