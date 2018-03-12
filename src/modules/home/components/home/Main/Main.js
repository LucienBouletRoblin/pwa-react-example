import React from "react";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import GetHome from "./GetHome";
import CreateHome from "./CreateHome";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.root} elevation={4}>
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <GetHome />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.root} elevation={4}>
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <CreateHome />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Main);
