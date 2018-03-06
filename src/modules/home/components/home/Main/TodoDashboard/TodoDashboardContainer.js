import { connect } from 'react-redux';
import TodoDashboard from './TodoDashboard';
import { selectors as taskSelec } from 'modules/tasks/ducks/tasks';
import { actions as tasks } from 'modules/tasks/ducks/tasks';

const mapStateToProps = store => {
  return {
    typeFilter: taskSelec.getTypeFilter(store),
    weekSelected: taskSelec.getWeekSelected(store)
  };
};

const mapDispatchToProps = {
  redirectFilteredTimelyTaskList: tasks.redirectFilteredTimelyTaskList,
  switchTypeFilter: tasks.switchTypeFilter,
  switchExpandTaskListPanel: tasks.switchExpandTaskListPanel,
  getTasks: tasks.getTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoDashboard);
