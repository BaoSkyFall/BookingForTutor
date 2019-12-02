import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
export default class FacebookLoginComponent extends Component {

  componentClicked = () => console.log("clicked");
  responseFacebook = response => {
    console.log(response);
    this.props.loginSuccess(response);
  };
  render() {
    let fbContent;
    console.log("Props: ", this.props);
    if (this.props.isLoggedIn) {
      fbContent = (<div>
      </div>);
    } else {
      fbContent = (
        <FacebookLogin
          appId="1426065474240213"
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
