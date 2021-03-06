import React, { Component } from "react";
import SignUp from "./SignUp";

export default class Auth extends Component {
  state = {
    page: 1, //0:login, 1:signup, 2:reset password
  };
  render() {
    const { page } = this.state;
    switch (page) {
      case 0:
        return <div></div>;
      case 1:
        return <SignUp/>;
      case 2:
        return <div></div>;
      default:
        return <div></div>;
    }
  }
}
