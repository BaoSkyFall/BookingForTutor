import React, { Component } from "react";
import { userService } from "../../services/user.service";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "../../helpers/history";
import "./Home.css";
import JWT from "jwt-decode";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SlideBar from "../SlideBar/SlideBar";
import Content from "./Content";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      user: {
        nameId: "",
        role: ""
      }
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    var decoded = JWT(token);
    //TO DO
    this.setState({
      user: { nameId: decoded.unique_name, role: decoded.role }
    });
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  logout = () => {
    userService.logout();
    history.push("/login");
  };

  render() {
    console.log(this.state);
    const { user } = this.state;
    let context = "";
    if (user.role != "Admin") {
      context = (
        <div>
          <h2>This is Root admin home page</h2>
          <h5>Hello {user.nameId}</h5>
        </div>
      );
    } else
      context = (
        <div>
          <h2>This is admin home page</h2>
          <h5>Hello {user.nameId}</h5>
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
        <Header user={user.nameId}></Header>
        <SlideBar user={user.nameId}></SlideBar>
        <Content user={user.nameId}></Content>
        <Footer></Footer>
      </div>
    );
  }
}
