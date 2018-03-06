import { connect } from 'react-redux';
import TodoTaskStatsPerWeek from './TodoTaskStatsPerWeek';

import { selectors as taskSelec } from 'modules/tasks/ducks/tasks';
import { actions as tasks } from 'modules/tasks/ducks/tasks';

const mapStateToProps = store => {
  return {
    stats: taskSelec.getDashboardTasksStats(store)
  };
};

const mapDispatchToProps = {
  redirectFilteredTimelyTaskList: tasks.redirectFilteredTimelyTaskList
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TodoTaskStatsPerWeek
);
