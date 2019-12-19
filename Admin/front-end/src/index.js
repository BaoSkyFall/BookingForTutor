import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { history } from "./helpers/history";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import SkillTabPage from "./components/SkillTagPage/SkillTabPage";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/login" exact component={LoginPage}></Route>
      <PrivateRoute
        path="/register"
        exact
        component={RegisterPage}
      ></PrivateRoute>
      <Route path="/skillTags" exact component={SkillTabPage}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
