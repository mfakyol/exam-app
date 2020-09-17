import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../helpers/css/signup.css";
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
      <div className="signup-container">
        <div className="signup-header">
          <span>
          Kayıt Ol
          </span>
        </div>
        <div className="signup-body">
        <input
          className="signup-input"
          type="text"
          name="email"
          placeholder="E-posta"
          onChange={this.onChangeHandle.bind(this)}
          value={email}
          id="email"
        />
        <button className="signup-button">Kayıt Ol</button>
        <span className="signup-redirect">
          Kayıtlı mısın? Giriş yapmak için <Link className="signup-redirect-link">tıklayınız.</Link>
        </span>
        </div>
      </div>
    );
  }
}
