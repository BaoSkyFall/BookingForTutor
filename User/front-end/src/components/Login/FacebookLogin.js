import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { MDBBtn, MDBIcon } from "mdbreact";
export default class FacebookLoginComponent extends Component {
  componentClicked = () => console.log("clicked");
  responseFacebook = response => {
    this.props.loginSuccess(response);
  };
  render() {
    let fbContent;
    if (this.props.isLoggedIn) {
      fbContent = <div></div>;
    } else {
      fbContent = (
        <MDBBtn
          type="button"
          color="white"
          rounded
          className="mr-md-3 z-depth-1a"
        >
          <FacebookLogin
              appId="1426065474240213"
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
        </MDBBtn>
      );
    }
    return <div>{fbContent}</div>;
  }
}
