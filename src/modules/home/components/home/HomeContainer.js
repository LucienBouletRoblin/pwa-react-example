import { connect } from "react-redux";
import Home from "./Home";
import { actions as home } from "modules/home/ducks/home";

const mapDispatchToProps = {
  getHomePosts: home.getHomePosts
};

export default connect(null, mapDispatchToProps)(Home);
