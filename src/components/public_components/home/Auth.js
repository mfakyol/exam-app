import React, { Component } from "react";
import Login from "./Login";

export default class Auth extends Component {
  state = {
    page: 0, //0:login, 1:signup, 2:reset password
  };
  render() {
    const { page } = this.state;
    switch (page) {
      case 0:
        return <Login />;
      case 1:
        return <div></div>;
      case 2:
        return <div></div>;
      default:
        return <Login />;
    }
  }
}
