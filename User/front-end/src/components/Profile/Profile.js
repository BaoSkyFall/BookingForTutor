import React, { Component } from "react";
import { userService } from "../../services/user.service";
import { MDBContainer } from "mdbreact";
import { history } from "../../helpers/history";
import "./Profile.css";
import JWT from "jwt-decode";
import MyNavBar from "../MyNavBar/MyNavBar";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInTokem: {
        nameId: "",
        role: ""
      }
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    var decoded = JWT(token);
    //TO DO
    this.setState({
      userInTokem: { nameId: decoded.unique_name, role: decoded.role }
    });
  };

  logout = () => {
    userService.logout();
    history.push("/login");
  };
  render() {
    console.log(this.state);
    const { userInTokem } = this.state;
    let header = "";
    if (userInTokem.role === "Tutor")
      header = (
        <div>
          <h2>This is Tutor profile page</h2>
          <h5>Hello {userInTokem.nameId}</h5>
        </div>
      );
    else
      header = (
        <div>
          <h2>This is student profile page</h2>
          <h5>Hello {userInTokem.nameId}</h5>
        </div>
      );
    return (
      // <div>
      //   Home
      //   <button variant="warning" text="light" onClick={() => this.logout()}>
      //     Logout
      //   </button>
      // </div>
      <div>
        <MyNavBar active="Profile" header={header}></MyNavBar>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}