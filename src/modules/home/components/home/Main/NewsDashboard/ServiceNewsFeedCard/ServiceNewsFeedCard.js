import React from 'react';
import PropTypes from 'prop-types';
import { getTimeFromNow } from 'utils/tools';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import portrait from 'assets/portrait.svg';
import AddToPhotosIcon from 'material-ui-icons/AddToPhotos';

const styles = {
  main: {
    padding: 10,
    marginBottom: 5
  }
};

class ServiceNewsFeedCard extends React.Component {
  handleClick(proId, e) {
    e.preventDefault();
    window.location.href = '/app/pros/' + proId;
  }
  render() {
    const { service, classes } = this.props;
    return (
      <Paper className={classes.main}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <Grid container direction="row">
                  <Grid item>
                    <img
                      src={portrait}
                      alt="portrait"
                      height="25px"
                      width="25px"
                    />{' '}
                  </Grid>
                  <Grid item>
                    <Button
                      style={{
                        padding: 0,
                        minWidth: 0,
                        minHeight: 0,
                        textTransform: 'initial'
                      }}
                      onClick={this.handleClick.bind(this, service.proId)}
                    >
                      <Typography variant="subheading">
                        {'Dr '}
                        {service.professional}
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <AddToPhotosIcon
                  color="primary"
                  style={{
                    width: 28,
                    height: 28
                  }}
                />
              </Grid>
            </Grid>
            <Typography variant="caption">
              {'Le service '}
              <b>{service.serviceName}</b>
              {' a été ajouté à ce professionel'}
            </Typography>
            <Typography variant="caption">
              <b>{'par : '}</b>
              {service.createName}
            </Typography>
            <Typography variant="caption" align="right">
              {getTimeFromNow(service.createDate)}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

ServiceNewsFeedCard.propTypes = {
  service: PropTypes.object
};

export default withStyles(styles)(ServiceNewsFeedCard);
