import React from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AirPlaneModeActiveIcon from "material-ui-icons/AirplanemodeActive";
import NetworkWifiIcon from "material-ui-icons/NetworkWifi";

const styles = {
  main: {
    padding: 15
  }
};

const SideBar = props => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.main}
    >
      <Grid item>
        <Typography variant="title">
          Network status:{" "}
          {navigator.onLine ? <NetworkWifiIcon /> : <AirPlaneModeActiveIcon />}
        </Typography>
      </Grid>
      <Grid item>
        <Button component={Link} to="/app/home/home">
          <Typography variant="subheading">Home</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SideBar);
