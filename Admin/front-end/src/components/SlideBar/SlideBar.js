import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SlideBar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">
            {/* Sidebar user panel */}
            <div className="user-panel">
              <div className="pull-left image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle"
                  alt="User"
                />
              </div>
              <div className="pull-left info">
                <p>{this.props.user}</p>
                <a href="fake_url">
                  <i className="fa fa-circle text-success" /> Online
                </a>
              </div>
            </div>
            {/* search form */}
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input
                  type="text"
                  name="q"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    name="search"
                    id="search-btn"
                    className="btn btn-flat"
                  >
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            {/* /.search form */}
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>

              <li className={this.props.page === "Home" ? "active" : "a"}>
                <NavLink to="/">
                  <i className="fa fa-dashboard" /> <span>Home</span>
                </NavLink>
              </li>
              <li
                className={this.props.page === "UserManager" ? "active" : "a"}
              >
                <NavLink to="/userManager">
                  <i className="fa fa-user" /> <span>User</span>
                </NavLink>
              </li>
              <li className={this.props.page === "SkillTags" ? "active" : "a"}>
                <NavLink to="/skillTags">
                  <i className="fa fa-tags" /> <span>SkillTags</span>
                </NavLink>
              </li>
              <li className="header">LABELS</li>
              <li>
                <a href="fake_url">
                  <i className="fa fa-circle-o text-red" />{" "}
                  <span>Important</span>
                </a>
              </li>
              <li>
                <a href="fake_url">
                  <i className="fa fa-circle-o text-yellow" />{" "}
                  <span>Warning</span>
                </a>
              </li>
              <li>
                <a href="fake_url">
                  <i className="fa fa-circle-o text-aqua" />{" "}
                  <span>Information</span>
                </a>
              </li>
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
