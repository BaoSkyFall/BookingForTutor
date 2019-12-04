import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { MDBBtn, MDBIcon } from "mdbreact";

export default class GoogleLoginComponent extends Component {
  successGoogle = res => {
    console.log(res);
    this.props.loginGGSuccess(res);
  };
  failureGoogle = res => {
    console.log(res);
  };
  render() {
    return (
      <MDBBtn type="button" color="white" rounded className="z-depth-1a">
        <GoogleLogin
          clientId="218954437526-oc51tgg875t9m2j90aemmu006lc1d9a5.apps.googleusercontent.com"
          buttonText=""
          onSuccess={this.successGoogle}
          onFailure={this.failureGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <MDBIcon fab icon="google-plus-g" className="blue-text" />
      </MDBBtn>
    );
  }
}
