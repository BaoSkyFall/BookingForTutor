import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
  MDBNavbar,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavbarNav,
  MDBNavLink,
  MDBView,
  MDBMask
} from "mdbreact";
import "./Register.css";
import { userService } from "../../services/user.service";
import { history } from "../../helpers/history";
import { NavLink } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      userId: "",
      firstName: "",
      lastName: "",
      password: "",
      confirm: "",
      message: "*"
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  register = e => {
    e.preventDefault();

    this.setState({ isSubmitted: true });

    const { userId, firstName, lastName, password, confirm } = this.state;

    if (userId === "") this.setState({ message: "Please input UserID" });
    else if (firstName === "")
      this.setState({ message: "Please input First Name" });
    else if (lastName === "")
      this.setState({ message: "Please input Last Name" });
    else if (password === "")
      this.setState({ message: "Please input Password" });
    else if (confirm === "") this.setState({ message: "Please input Confirm" });
    else if (password !== confirm)
      this.setState({ message: "Confirm password is wrong" });
    else {
      if (userId && password) {
        this.setState({ message: "Registering account" });
        userService
          .register({
            UserName: userId,
            Password: password,
            ConfirmPassword: password,
            FirstName: firstName,
            LastName: lastName
          })
          .then(
            data => {
              if (data.user === null) {
                this.setState({ message: "This name is existed" });
              } else {
                history.push("/login");
              }
            },
            error => {
              this.setState({ message: "Registration failed" });
            }
          );
      }
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
    let context = (
      <MDBContainer id="container">
        <MDBRow>
          <MDBCol md="6" id="inner">
            <MDBCard className="myCard">
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Register admin</strong>
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
                {/* <MDBInput
              label="Email"
              name="email"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={this.onChange}
            /> */}
                <div>
                  <MDBInput
                    label="First Name"
                    name="firstName"
                    className="col-12"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Last Name"
                    name="lastName"
                    className="col-12"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.onChange}
                  />
                </div>
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
                {/* <div id="optRole">
              <select
                className="browser-default custom-select"
                onChange={this.onOptChanged}
              >
                <option>Choose your role</option>
                <option value={true}>Tutor</option>
                <option value={false}>Student</option>
              </select>
            </div> */}
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="purple"
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
                  Done?
                  <NavLink to="/">
                    <span className="blue-text ml-1">Go home</span>
                  </NavLink>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
    let contentLogin = (
      <div>
        <header>
          <div>
            <MDBNavbar
              color="purple"
              fixed="top"
              dark
              expand="md"
              scrolling
              transparent
            >
              <MDBNavbarBrand href="/">
                <strong>DoubleB</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem active>
                    <MDBNavLink to="/register">Register</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <span id="logOutBtn" onClick={() => this.logout()}>
                      Log Out
                    </span>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </div>

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <MDBMask
              overlay="purple-light"
              className="flex-center flex-column text-white text-center"
            >
              <h2>This is admin register page</h2>
            </MDBMask>
          </MDBView>
        </header>
        <main>
          <MDBContainer className="text-center my-5">
            <div>{context}</div>
          </MDBContainer>
        </main>
      </div>
    );
    return <div>{contentLogin}</div>;
  }
}
