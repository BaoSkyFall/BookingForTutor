import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export default class GoogleLoginComponent extends Component {
  successGoogle = res => {

    console.log(res);
  };
  failureGoogle = res => {
    
    console.log(res);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="218954437526-oc51tgg875t9m2j90aemmu006lc1d9a5.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.successGoogle}
          onFailure={this.failureGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
      </div>
    );
  }
}
