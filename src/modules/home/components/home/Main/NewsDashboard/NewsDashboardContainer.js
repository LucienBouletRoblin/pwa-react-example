import { connect } from 'react-redux';
import { getTickets } from 'modules/tickets/ducks/tickets/actions';
import {
  actions as services,
  selectors as servicesSelectors
} from 'modules/common/ducks/history';
import NewsDashboard from './NewsDashboard';

const mapStateToProps = store => {
  return {
    feeds: servicesSelectors.getMyFeed(store)
  };
};

const mapDispatchToProps = {
  getTickets: getTickets,
  getFeedServices: services.getFeedServices
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDashboard);
