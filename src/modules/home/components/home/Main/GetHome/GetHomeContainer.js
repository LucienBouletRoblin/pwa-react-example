import { connect } from "react-redux";
import GetHome from "./GetHome";

const mapStateToProps = store => {
  return {
    gets: store.Home.home
  };
};

export default connect(mapStateToProps)(GetHome);
