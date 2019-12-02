import React, { Component } from "react";
import FacebookLoginComponent from "./FacebookLogin";
import GoogleLoginComponent from "./GoogleLogin";
import Button from 'react-bootstrap/Button';
export default class Login extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: ""
  };
  onLogoutFB = () => {
    console.log('windown:', window.FB)
    window.FB.logout();
    console.log(window.FB);
  }
  loginSuccess = response => {
    localStorage.setItem('token', response.accessToken)
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
      contentLogin = (<div> <h1>{this.state.userId}</h1>
        <h2>{this.state.name}</h2>
        <h2>{this.state.email}</h2>
        <img src={this.state.picture} alt="" />
        <Button variant="danger" onClick={this.onLogoutFB}>Logout</Button>

      </div>)
    } else {
      contentLogin = (<div>
        <FacebookLoginComponent
          loginSuccess={loginSuccess}
          isLoggedIn={this.state.isLoggedIn}
        />
        <GoogleLoginComponent />

      </div>)
    }
    return (
      <div>
        {contentLogin}
      </div>
    );
  }
}
