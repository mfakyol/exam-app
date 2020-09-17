import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import "../../../helpers/css/public-navbar.css";
export default class PublicNavbar extends Component {
  render() {
    return (
      <header className="public-header">
        <nav className="public-nav">
          <a className="public-nav-brand">ONLINE EXAM</a>
          <ul className="public-nav-items">
            <li><NavLink to="/" exact activeClassName="public-nav-items-active">HOME</NavLink></li>
            <li><NavLink to="/about" exact activeClassName="public-nav-items-active">ABOUT</NavLink></li>
            <li><NavLink to="/contact" activeClassName="public-nav-items-active">CONTACT</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}
