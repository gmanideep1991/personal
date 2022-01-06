import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#ffed03",
    display: "inline-grid"
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="twitter"
        className={classes.socialIcon}
        href="https://twitter.com/gmanideep1991"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        aria-label="twitter"
        className={classes.socialIcon}
        href="https://www.linkedin.com/in/manideep-gattamaneni/"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        aria-label="twitter"
        className={classes.socialIcon}
        href="https://github.com/manideepgattamaneni"
      >
        <GitHubIcon />
      </IconButton>
    </div>
  );
}
