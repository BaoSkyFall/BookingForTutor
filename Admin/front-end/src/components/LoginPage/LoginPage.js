import React, { Component } from "react";
import JWT from "jwt-decode";
import "./LoginPage.css";
import { userService } from "../../services/user.service";
import { history } from "../../helpers/history";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      isSubmitted: false,
      message: "*"
    };
  }

  componentDidMount() {
    document.body.className = "";
    document.body.classList.add("hold-transition");
    document.body.classList.add("login-page");
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
            console.log("data:", data);
            if (data.Roles[0] === "Admin") {
              history.push("/");
            } else {
              localStorage.removeItem("token");
              this.setState({
                message: "You are not Admin to access this site"
              });
              history.push("/login");
            }
          });
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
      <div className="login-box">
        <div className="login-logo">
          <b>DoubleB</b> Admin's page
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <p className="errMessage">{this.state.message}</p>
          <form onSubmit={this.login}>
            <div className="form-group has-feedback">
              <input
                type="text"
                name="userId"
                className="form-control"
                placeholder="UserID"
                onChange={this.onChange}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onChange}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-8"></div>

              <div className="col-xs-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>

          <a href="#">I forgot my password</a>
          <br />
        </div>
        {/* /.login-box-body */}
      </div>
    );

    return <div>{contentLogin}</div>;
  }
}
