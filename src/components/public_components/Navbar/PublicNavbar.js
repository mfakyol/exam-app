import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import "../../../helpers/css/public-navbar.css";
export default class PublicNavbar extends Component {
  render() {
    return (
      <header className="public-header">
        <nav className="public-nav">
          <a className="public-nav-brand" href="/">OSSIS</a>
          <ul className="public-nav-items">
            <li><NavLink to="/" exact activeClassName="public-nav-items-active">ANA SAYFA</NavLink></li>
            <li><NavLink to="/about" exact activeClassName="public-nav-items-active">HAKKIMIZDA</NavLink></li>
            <li><NavLink to="/contact" activeClassName="public-nav-items-active">İLETİŞİM</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}
