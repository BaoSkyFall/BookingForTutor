import React, { Component } from "react";

import { MDBContainer } from "mdbreact";
import "./Home.css";
import JWT from "jwt-decode";
import MyNavBar from "../MyNavBar/MyNavBar";
import UnAuthHome from "./UnAuthHome";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nameId: null,
        role: null
      }
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      var decoded = JWT(token);
      //TO DO
      this.setState({
        user: { nameId: decoded.unique_name, role: decoded.role }
      });
    }
  };

  render() {
    console.log(this.state);
    const { user } = this.state;
    let header = "";
    if (user.role === "Tutor")
      header = (
        <div>
          <h2>This is Tutor home page</h2>
          <h5>Hello {user.nameId}</h5>
        </div>
      );
    else if (user.role !== null)
      header = (
        <div>
          <h2>This is student home page</h2>
          <h5>Hello {user.nameId}</h5>
        </div>
      );
    let AuthedHome = (
      <div>
        <MyNavBar active="Home" header={header}></MyNavBar>

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
    return (
      // <div>
      //   Home
      //   <button variant="warning" text="light" onClick={() => this.logout()}>
      //     Logout
      //   </button>
      // </div>
      <div>

        {user.nameId === null && <UnAuthHome></UnAuthHome>}
        {user.nameId !== null && AuthedHome}
      </div>
    );
  }
}
