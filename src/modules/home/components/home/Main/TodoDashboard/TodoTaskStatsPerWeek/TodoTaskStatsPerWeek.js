import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import TodoTaskStats from '../TodoTaskStats';
import Button from 'material-ui/Button';

const styles = theme => ({
  cursorLink: {
    cursor: 'pointer'
  }
});

class TodoTaskStatsPerWeek extends React.Component {
  handleRedirectTaskList = (week, filter) => {
    this.props.redirectFilteredTimelyTaskList(week, filter);
  };

  render() {
    const { stats, week, classes } = this.props;
    let taskTypeList = [
      {
        id: 'phoneCall',
        taskType: stats.type_1_name,
        taskNum: stats.current_week_tasks_type1
      },
      {
        id: 'mail',
        taskType: stats.type_2_name,
        taskNum: stats.current_week_tasks_type2
      },
      {
        id: 'visit',
        taskType: stats.type_3_name,
        taskNum: stats.current_week_tasks_type3
      }
    ];
    if (week === 'nextWeekTasksExpandPanel') {
      taskTypeList[0].taskNum = stats.next_week_tasks_type1;
      taskTypeList[1].taskNum = stats.next_week_tasks_type2;
      taskTypeList[2].taskNum = stats.next_week_tasks_type3;
    } else if (week === 'followingWeeksTasksExpandPanel') {
      taskTypeList[0].taskNum = stats.later_tasks_type1;
      taskTypeList[1].taskNum = stats.later_tasks_type2;
      taskTypeList[2].taskNum = stats.later_tasks_type3;
    }

    return (
      <React.Fragment>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-around"
        >
          {taskTypeList.map(type => {
            return (
              <TodoTaskStats
                key={type.id}
                taskNum={type.taskNum}
                taskType={type.taskType}
                linkStyle={classes.cursorLink}
                onClick={() => {
                  this.handleRedirectTaskList(week, type.id);
                }}
              />
            );
          })}
        </Grid>
        <Grid item>
          <Button
            variant="raised"
            onClick={() => {
              this.handleRedirectTaskList(week, 'ALL');
            }}
          >
            Voir toutes les tâches
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TodoTaskStatsPerWeek);
