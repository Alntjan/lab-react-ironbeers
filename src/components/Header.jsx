import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return <NavLink to="/">Homepage</NavLink>;
  }
}

export default Header;
