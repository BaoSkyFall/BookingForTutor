import React, { Component } from "react";
import JWT from "jwt-decode";
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
          var decoded = JWT(user.access_token);

          userService.getUserbyUsername(decoded.unique_name).then(data => {
            console.log('data:', data)
            if (data.Roles[0] === "Admin") {
              history.push("/")
            }
            else {
              localStorage.removeItem("token");
              this.setState({ message: "You are not Admin to access this site" });
              history.push("/login");
            }
          })
        },
        error => {
          this.setState({ message: "UserID or Password was wrong" });
        }
      );
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let contentLogin = (
      <MDBContainer id="container">
        <p id="banner">DoubleB admin's page</p>
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
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );

    return <div className="bg">{contentLogin}</div>;
  }
}
