import React from "react";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import { lightGreen } from "material-ui/colors";

const styles = theme => ({
  main: {
    padding: 5
  },
  paperDashboard: {
    padding: 15,
    height: 320
  },
  active: {
    backgroundColor: lightGreen[400]
  }
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paperDashboard}>
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <Typography variant="headline" align="center">
                  Get Post
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Main);
