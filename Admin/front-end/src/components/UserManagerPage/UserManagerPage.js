import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SlideBar from "../SlideBar/SlideBar";
import Content from "./Content";

export default class UserManagerPage extends Component {
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
    return (
      <div>
        <Header user={user.nameId}></Header>
        <SlideBar user={user.nameId} page="UserManager"></SlideBar>

        {/* Content */}
        <div className="content-wrapper">
          <section className="content-header">
            <h1>Users</h1>
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
