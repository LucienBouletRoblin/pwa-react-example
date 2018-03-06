import React from 'react';
import PropTypes from 'prop-types';
import { getTimeFromNow } from 'utils/tools';
import { Link } from 'react-router-dom';

import Button from 'material-ui/Button/Button';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import SmsFailedIcon from 'material-ui-icons/SmsFailed';
import FlagIcon from 'material-ui-icons/Flag';
import { blue, orange, red } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import portrait from 'assets/portrait.svg';

const styles = {
  main: {
    padding: 10,
    marginBottom: 5
  },
  stars: { height: 18, width: 18 },
  noDecoration: {
    textDecoration: 'none'
  },
  icons: {
    width: 28,
    height: 28
  }
};

class TicketNewsFeedCard extends React.Component {
  handleClick(proId, e) {
    e.preventDefault();
    window.location.href = '/app/pros/' + proId;
  }
  render() {
    const { ticket, classes } = this.props;

    return (
      <Link to={'/app/tickets/' + ticket.id} className={classes.noDecoration}>
        <Paper className={classes.main}>
          <Grid container>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={9}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ padding: 8 }}
                  >
                    <Grid item style={{ flex: '0 1 auto', padding: 0 }}>
                      <Typography variant="subheading">
                        {ticket.subject}
                      </Typography>
                    </Grid>
                    <Grid item style={{ padding: 0 }}>
                      {ticket.serviceSnac && (
                        <Typography variant="body2">
                          {ticket.serviceSnac}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    spacing={0}
                  >
                    {ticket.isMajor && (
                      <Grid item>
                        <FlagIcon
                          nativeColor={red[700]}
                          className={classes.icons}
                        />
                      </Grid>
                    )}
                    <Grid item>
                      <SmsFailedIcon color="primary" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider light style={{ marginBottom: 5 }} />
              {ticket.professional && (
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <img
                      src={portrait}
                      alt="portrait"
                      height="25px"
                      width="25px"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      style={{
                        padding: 0,
                        minWidth: 0,
                        minHeight: 0,
                        textTransform: 'initial'
                      }}
                      onClick={this.handleClick.bind(this, ticket.proId)}
                    >
                      <Typography variant="body1">
                        {ticket.professional}
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              )}
              <Typography variant="caption" style={{ color: orange[700] }}>
                {ticket.priority && ticket.priority}
              </Typography>
              {ticket.status && (
                <Typography
                  variant="caption"
                  style={{
                    color: blue[700]
                  }}
                >
                  {ticket.status}
                </Typography>
              )}
              <Typography variant="caption">
                <b>{'par : '}</b>
                {ticket.creatorName}
              </Typography>

              {ticket.assignee && (
                <Typography variant="caption">
                  <b>{'Assigné à : '}</b>
                  {ticket.assignee}
                </Typography>
              )}

              <Typography variant="caption" align="right">
                {getTimeFromNow(ticket.createDate)}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    );
  }
}

TicketNewsFeedCard.propTypes = {
  ticket: PropTypes.object
};

export default withStyles(styles)(TicketNewsFeedCard);
