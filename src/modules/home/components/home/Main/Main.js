import React from "react";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import GetHome from "./GetHome";
import CreateHome from "./CreateHome";

class Main extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <GetHome />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
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

export default Main;
