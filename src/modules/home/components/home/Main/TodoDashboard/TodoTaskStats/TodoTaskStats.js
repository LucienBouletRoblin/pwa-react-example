import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

class TodoTaskStats extends React.Component {
  render() {
    const { taskNum, taskType, onClick, linkStyle } = this.props;

    return (
      <Grid item align="center" onClick={onClick} className={linkStyle}>
        <Typography variant="display3">{taskNum}</Typography>
        <Typography variant="subheading">
          {taskNum > 1 ? taskType : taskType.slice(0, -1)}
        </Typography>
      </Grid>
    );
  }
}

export default TodoTaskStats;
