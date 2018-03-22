import React from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import AirPlaneModeActiveIcon from "material-ui-icons/AirplanemodeActive";
import NetworkWifiIcon from "material-ui-icons/NetworkWifi";

const styles = {
  main: {
    padding: 15
  }
};

class SideBar extends React.Component {
  render() {
    const { classes, online } = this.props;
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
            {online ? <NetworkWifiIcon /> : <AirPlaneModeActiveIcon />}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SideBar);
