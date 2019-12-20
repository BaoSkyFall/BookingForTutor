import React, { Component } from "react";

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

import "./HomePage.css";
import JWT from "jwt-decode";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SlideBar from "../SlideBar/SlideBar";
import Content from "./Content";

export default class HomePage extends Component {
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
  }

  componentDidMount = () => {
    // const token = localStorage.getItem("token");
    // var decoded = JWT(token);
    // this.setState({
    //   user: { nameId: decoded.unique_name, role: decoded.role }
    // });

    this.setState({
      user: { nameId: "Hai binh", role: "Root" }
    });
    document.body.className = "";
    document.body.classList.add("fixed");
    document.body.classList.add("skin-blue");
    document.body.classList.add("sidebar-mini");
  };

  render() {
    const { user } = this.state;
    let context = "";
    if (user.role === "Root") {
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
      <div>
        <Header user={user.nameId}></Header>
        <SlideBar user={user.nameId} page="Home"></SlideBar>

        {/* Content */}
        <div className="content-wrapper">
          <section className="content-header">
            <h1>Home</h1>
          </section>
          <section className="content">
            <Content></Content>
          </section>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
