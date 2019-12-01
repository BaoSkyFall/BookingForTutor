import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { PropTypes } from "react";
export default class FacebookLoginComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentClicked = () => console.log("clicked");
  responseFacebook = response => {
    console.log(response);
    console.log(this.props);
    this.props.loginSuccess(response);
  };
  render() {
    let fbContent;
    console.log("Props: ", this.props);
    if (this.props.isLoggedIn) {
      fbContent = <div></div>;
    } else {
      fbContent = (
        <FacebookLogin
          appId="1426065474240213"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
