import React, { Component } from "react";
import { userService } from "../../services/user.service";
// import "bootstrap/dist/css/bootstrap.min.css";
export default class Home extends Component {
  logout = () => {
    userService.logout();
  };
  render() {
    return (
      <div>
        Home
        <button variant="warning" text="light" onClick={() => this.logout()}>
          Logout
        </button>
      </div>
    );
  }
}
