import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import '../style/header.scss';

class Header extends Component {

  render() {
    return (
        <div>
         <h1>Tour of Heroes</h1>
         <nav>
           <Link to="/dashboard" activeClassName="active">Dashboard</Link>
           <Link to="/heroes" activeClassName="active">Heroes</Link>
         </nav>
         </div>
    );
  }
}


export default Header;
