import React, { Component } from "react";
import "../../../helpers/css/login.css";
export default class Login extends Component {
  state = {
    email: "",
  };

  onChangeHandle(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { email } = this.state;
    return (
      <div className="login-container">
        <input
          className="login-input"
          type="text"
          name="email"
          placeholder="E-posta"
          onChange={this.onChangeHandle.bind(this)}
          value={email}
          id="email"
        />
        <button className="login-button">Kayıt Ol</button>
      </div>
    );
  }
}
