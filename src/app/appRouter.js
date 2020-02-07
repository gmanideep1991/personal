import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../home/home.js";
import About from "../home/home.js";
import Dashboard from "../home/home.js";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home title="home" />
          </Route>
          <Route path="/about">
            <About title="about" />
          </Route>
          <Route path="/dashboard">
            <Dashboard title="dashboard" />
          </Route>
        </Switch>
      </Router>
    );
  }
}
