import React, { Component } from "react";
import FacebookLoginComponent from "./FacebookLogin";
import GoogleLoginComponent from "./GoogleLogin";
import SocialLoginConfirmRole from "./SocialLoginConfirmRole";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { userService } from "../../services/user.service";
import { history } from "../../helpers/history";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      isSubmitted: false,
      message: "*",
      isLoginBySocial: false
    };
  }

  login = e => {
    e.preventDefault();

    this.setState({ isSubmitted: true });
    const { userId, password } = this.state;

    if (userId === "") this.setState({ message: "Please input UserID" });
    else if (password === "")
      this.setState({ message: "Please input Password" });
    else {
      userService.login(userId, password).then(
        user => {
          history.push("/");
          console.log(localStorage.getItem("token"));
        },
        error => {
          alert("Login failed");
        }
      );
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogoutFB = () => {
    // console.log("windown:", window.FB);
    // window.FB.logout();
    // console.log(window.FB);
  };

  loginFBSuccess = response => {
    console.log(response);
    userService.getUserbyUsername(response.id).then(
      res => {
        userService.login(response.id, "123456Abc*").then(
          res => {
            // history.push("/");
          },
          err => {
            // history.push("/");
          }
        );
      },
      err => {
        if (err == "Not Found") {
          console.log("err:", err);
          const user = {
            UserName: response.id,
            Password: "123456Abc*",
            ConfirmPassword: "123456Abc*",
            Email: response.email,
            FirstName: response.name,
            LastName: response.name
          };
          localStorage.setItem("userFB", JSON.stringify(user));
          this.setState({ isLoginBySocial: true });
        } else {
          // history.push("/");
        }
      }
    );
  };
  loginGGSuccess = response => {
    console.log(response);
    userService.getUserbyUsername(response.El).then(
      res => {
        userService.login(response.id, "123456Abc*").then(
          res => {
            history.push("/");
          },
          err => {
            history.push("/");
          }
        );
      },
      err => {
        if (err == "Not Found") {
          console.log("err:", err);
          const user = {
            UserName: response.El,
            Password: "123456Abc*",
            ConfirmPassword: "123456Abc*",
            Email: response.profileObj.email,
            FirstName: response.profileObj.familyName,
            LastName: response.profileObj.givenName
          };
          localStorage.setItem("userFB", JSON.stringify(user));
          this.setState({ isLoginBySocial: true });
        } else {
          history.push("/");
        }
      }
    );
  };
  render() {
    const { isLoginBySocial } = this.state;
    let contentLogin = (
      <MDBContainer id="container">
        <p id="banner">Welcome to DoubleB</p>
        <MDBRow>
          <MDBCol md="6" id="inner">
            <MDBCard className="myCard">
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <p className="errMessage">{this.state.message}</p>
                <MDBInput
                  label="UserID"
                  name="userId"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Password"
                  name="password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={this.onChange}
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  <a href="#!" className="blue-text ml-1">
                    Forgot Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.login}
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <FacebookLoginComponent
                    className="socialLogin"
                    loginSuccess={this.loginFBSuccess}
                    isLoggedIn={this.state.isLoggedIn}
                  />
                  <GoogleLoginComponent
                    className="socialLogin"
                    loginGGSuccess={this.loginGGSuccess}
                  />
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <NavLink to="/register">
                    <span className="blue-text ml-1">Register</span>
                  </NavLink>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
    let contentLoginSocial = <SocialLoginConfirmRole />;
    return isLoginBySocial ? (
      <div className="bg">{contentLoginSocial}</div>
    ) : (
      <div className="bg">{contentLogin}</div>
    );
  }
}
