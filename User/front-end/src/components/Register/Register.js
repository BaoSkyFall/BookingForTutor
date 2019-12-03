import React, { Component } from "react";
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
import "./Register.css";
import { userService } from "../../services/user.service";
import { history } from "../../helpers/history";
import { NavLink } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      email: "",
      password: "",
      confirm: "",
      isTutor: null
    };
  }

  register = () => {
    //TO DO:
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onOptChanged = e => {
    if (e.target.value === "true") this.setState({ isTutor: true });
    else if (e.target.value === "false") this.setState({ isTutor: false });
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
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Register</strong>
                  </h3>
                </div>
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
                  label="Email"
                  name="email"
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
                <MDBInput
                  label="Confirm password"
                  name="confirm"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={this.onChange}
                />
                <div id="optRole">
                  <select
                    className="browser-default custom-select"
                    onChange={this.onOptChanged}
                  >
                    <option>Choose your role</option>
                    <option value={true}>Tutor</option>
                    <option value={false}>Student</option>
                  </select>
                </div>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.register}
                  >
                    Register
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Already a member?
                  <NavLink to="/login">
                    <span className="blue-text ml-1">Sign in</span>
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
