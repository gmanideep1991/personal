import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Timeline from "./timeline.js";

const useStyles = theme => ({
  home: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#27292e"
  },
  downloadButton: {
    marginTop: "100px",
    color: "#d4d4d4",
    border: "1px solid #ffed03",
    backgroundColor: "#35363b",
    "&:hover": {
      backgroundColor: "#35363b",
      border: "2px solid #ffed03"
    }
  },
  timeline: {
    // backgroundColor: "#35363b",
    color: "#d4d4d4"
  },

  profile: {
    padding: "50px",
    color: "#d4d4d4",
    backgroundColor: "#35363b"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <Grid container className={classes.profileContainer}>
          <Grid item xs={12} className={classes.profile}>
            <h1>Hello</h1>
            <h3>This is Manideep Gattamaneni</h3>
            <div>
              I am currently working at cerner corporation as software engineer
              trying new things and solving problems.
            </div>
            {/* <Button className={classes.downloadButton} variant="contained">
              View Resume
            </Button> */}
          </Grid>
          <Grid item xs={12} className={classes.timeline}>
            <Timeline />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Home);
