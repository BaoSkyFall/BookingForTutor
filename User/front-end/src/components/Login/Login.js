import React, { Component } from "react";
import FacebookLoginComponent from "./FacebookLogin";
import GoogleLoginComponent from "./GoogleLogin";
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
      message: "*"
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
    // localStorage.setItem("token", response.accessToken);
    // this.setState({
    //   isLoggedIn: true,
    //   userId: response.id,
    //   name: response.name,
    //   email: response.email,
    //   picture: response.picture.data.url
    // });
  };
  render() {
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
                    loginSuccess={this.loginFBSuccess}
                    isLoggedIn={this.state.isLoggedIn}
                  />
                  <GoogleLoginComponent />
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
    return <div className="bg">{contentLogin}</div>;
  }
}
