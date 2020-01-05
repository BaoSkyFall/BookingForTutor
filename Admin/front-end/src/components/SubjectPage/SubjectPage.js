import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SlideBar from "../SlideBar/SlideBar";
import Content from "./Content";
import "./SubjectPage.css";
import JWT from "jwt-decode";

export default class SubjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nameId: "",
        role: ""
      }
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    var decoded = JWT(token);
    this.setState({
      user: { nameId: decoded.unique_name, role: decoded.role }
    });

    document.body.className = "";
    document.body.classList.add("fixed");
    document.body.classList.add("skin-blue");
    document.body.classList.add("sidebar-mini");
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <Header user={user.nameId}></Header>
        <SlideBar user={user.nameId} page="Subject"></SlideBar>

        {/* Content */}
        <div className="content-wrapper">
          <section className="content-header">
            <h1>Subject</h1>
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
