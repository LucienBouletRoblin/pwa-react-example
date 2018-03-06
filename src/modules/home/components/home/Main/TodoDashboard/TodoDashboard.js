import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { lightGreen } from 'material-ui/colors';
import TodoTaskStatsPerWeek from './TodoTaskStatsPerWeek';

const styles = theme => ({
  paperDashboard: {
    padding: 15,
    height: 320
  },
  active: {
    backgroundColor: lightGreen[400]
  }
});

class TodoDashboard extends React.Component {
  state = {
    toDoThisWeek: true,
    toDoLater: false
  };

  handleToDoThisWeek = () => {
    this.setState({
      toDoThisWeek: true,
      toDoLater: false
    });
    this.props.switchExpandTaskListPanel('currentWeekTasksExpandPanel');
  };

  handleToDoNextWeek = () => {
    this.setState({
      toDoThisWeek: false,
      toDoLater: false
    });
    this.props.switchExpandTaskListPanel('nextWeekTasksExpandPanel');
  };

  handleToDoLater = () => {
    this.setState({
      toDoThisWeek: false,
      toDoLater: true
    });
    this.props.switchExpandTaskListPanel('followingWeeksTasksExpandPanel');
  };

  componentDidMount() {
    this.props.getTasks();
    this.props.switchTypeFilter('ALL');
    this.props.switchExpandTaskListPanel('currentWeekTasksExpandPanel');
  }

  render() {
    const { classes } = this.props;
    const { toDoThisWeek, toDoLater } = this.state;
    return (
      <Paper className={classes.paperDashboard}>
        <Grid
          container
          alignItems="center"
          direction="column"
          justify="space-around"
        >
          <Grid item>
            <Typography variant="headline" align="center">
              To Do
            </Typography>
          </Grid>

          <Grid item>
            <Grid container direction="row" justify="center">
              <Grid item>
                <Button
                  size="small"
                  onClick={this.handleToDoThisWeek}
                  className={toDoThisWeek && !toDoLater ? classes.active : ''}
                >
                  Cette semaine
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  onClick={this.handleToDoNextWeek}
                  className={!toDoThisWeek && !toDoLater ? classes.active : ''}
                >
                  Semaine prochaine
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  onClick={this.handleToDoLater}
                  className={!toDoThisWeek && toDoLater ? classes.active : ''}
                >
                  Plus tard
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {this.state.toDoThisWeek &&
            !this.state.toDoLater && (
              <TodoTaskStatsPerWeek week={'currentWeekTasksExpandPanel'} />
            )}
          {!this.state.toDoThisWeek &&
            !this.state.toDoLater && (
              <TodoTaskStatsPerWeek week={'nextWeekTasksExpandPanel'} />
            )}
          {!this.state.toDoThisWeek &&
            this.state.toDoLater && (
              <TodoTaskStatsPerWeek week={'followingWeeksTasksExpandPanel'} />
            )}
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(TodoDashboard);
