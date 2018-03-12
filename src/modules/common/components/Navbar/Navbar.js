import React from "react";
import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";
import Grid from "material-ui/Grid";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hidden xsDown>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Typography variant="title" color="inherit">
                Progressive-web-app example
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Navbar;
