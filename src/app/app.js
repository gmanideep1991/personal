import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../home/home.js";
import SocialIcons from "./socialIcons.js";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Home />
        <SocialIcons />
      </React.Fragment>
    );
  }
}
