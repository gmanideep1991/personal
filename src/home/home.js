import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";

const useStyles = theme => ({
  home: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#27292e",
    paddingTop: "100px",
    paddingBottom: "100px"
  },
  paper: { width: "100%", maxWidth: 980 },

  profile: {
    padding: "50px",
    backgroundColor: "#35363b",
    color: "#d4d4d4"
  },
  profileSocial: {
    backgroundColor: "#ffed03",
    padding: "15px"
  },
  socialIcon: {
    borderRadius: "50%"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <div>
          <Paper className={classes.paper} elevation={3}>
            <Grid container className={classes.profileContainer}>
              <Grid item xs={12} className={classes.profile}>
                <h1>Hello</h1>
                <h3>This is Manideep Gattamaneni</h3>
                <div>
                  I am currently working at cerner corporation as software
                  engineer trying new things and solving problems.
                </div>
              </Grid>
              <Grid item xs={12} className={classes.profileSocial}>
                <Grid container>
                  <Grid item xs={4}>
                    <IconButton
                      aria-label="twitter"
                      className={classes.socialIcon}
                      href="https://twitter.com/gmanideep1991"
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton
                      aria-label="twitter"
                      className={classes.socialIcon}
                      href="https://www.linkedin.com/in/manideep-gattamaneni/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton
                      aria-label="twitter"
                      className={classes.socialIcon}
                      href="https://github.com/gmanideep1991"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Home);
