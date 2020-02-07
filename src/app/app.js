import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../home/home.js";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Home />
      </React.Fragment>
    );
  }
}
