import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import ListNewsFeed from './ListNewsFeed';

const styles = theme => ({
  paperNews: {
    padding: 15,
    height: 735
  },
  feedList: {
    height: 687,
    overflowY: 'auto'
  }
});

class NewsDashboard extends React.Component {
  componentDidMount() {
    this.props.getTickets();
    this.props.getFeedServices();
  }

  render() {
    const { feeds, classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paperNews}>
            <Grid container alignItems="stretch" direction="column">
              <Grid item>
                <Typography variant="headline" align="center">
                  Fil d'actualité
                </Typography>
              </Grid>
              <Grid item className={classes.feedList}>
                <ListNewsFeed feeds={feeds} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

NewsDashboard.propTypes = {
  tickets: PropTypes.array
};

export default withStyles(styles)(NewsDashboard);
