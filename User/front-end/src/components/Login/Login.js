import React, { Component } from "react";
import FacebookLoginComponent from "./FacebookLogin";
import GoogleLoginComponent from "./GoogleLogin";

import { PropTypes } from "react";
export default class Login extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: ""
  };
  loginSuccess = response => {
    this.setState({
      isLoggedIn: true,
      userId: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };
  render() {
    let contentLogin;
    const loginSuccess = this.loginSuccess;
    if (this.state.isLoggedIn) {
    } else {
    }
    return (
      <div>
        <FacebookLoginComponent
          loginSuccess={loginSuccess}
          isLoggedIn={this.state.isLoggedIn}
        />
        <GoogleLoginComponent />
      </div>
    );
  }
}
