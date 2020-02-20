import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  timeLine: {},
  work: {
    backgroundColor: "#35363b",
    width: "40%",
    margin: "30px auto",
    color: "#d4d4d4",
    padding: "20px",
    borderTop: "2px solid #ffed03"
  }
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Work Experience</h1>
      <Container className={classes.timeLine}>
        <Paper className={classes.work} elevation={3}>
          <h2>cerner corporation</h2>
          <div>Associate senior software engineer</div>
          <div>Working with contract and reimbursement team</div>
        </Paper>
        <Paper className={classes.work} elevation={3}>
          <h2>cerner corporation</h2>
          <div>software engineer</div>
          <div>Working with iAware Platfrom team</div>
        </Paper>
        <Paper className={classes.work} elevation={3}>
          <h2>Thoughtlab</h2>
          <div>web developer</div>
          <div>Worked on multiple websites</div>
        </Paper>
      </Container>
    </div>
  );
}
