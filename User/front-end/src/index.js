import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { history } from "./helpers/history";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <PrivateRoute path="/" exact component={Home}></PrivateRoute>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
