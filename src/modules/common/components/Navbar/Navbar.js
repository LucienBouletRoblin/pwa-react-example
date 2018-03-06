import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";
import IconButton from "material-ui/IconButton";
import MoreIcon from "material-ui-icons/MoreHoriz";
import { Link } from "react-router-dom";
import Menu, { MenuItem } from "material-ui/Menu";
import Grid from "material-ui/Grid";

const styles = () => ({
  noDecoration: {
    textDecoration: "none"
  }
});

class Navbar extends React.Component {
  state = {
    menu: null
  };

  handleOpenMenu = event => {
    this.setState({ menu: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ menu: null });
  };

  render() {
    const { classes } = this.props;

    const { menu } = this.state;

    return (
      <React.Fragment>
        <Hidden xsDown>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="title" color="inherit">
                Progressive-web-app example
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item>
            <IconButton
              aria-owns={Boolean(menu) ? "menu-appbar" : null}
              aria-haspopup="true"
              onClick={this.handleOpenMenu}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={menu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(menu)}
              onClose={this.handleCloseMenu}
            >
              <Link to="/app/home/" className={classes.noDecoration}>
                <MenuItem onClick={this.handleCloseMenu}>Accueil</MenuItem>
              </Link>
            </Menu>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
