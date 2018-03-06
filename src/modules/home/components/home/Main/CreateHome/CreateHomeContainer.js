import { connect } from "react-redux";
import CreateHome from "./CreateHome";
import { actions as home } from "modules/home/ducks/home";

const mapStateToProps = store => {
  return {
    createdPost: store.Home.createdPost
  };
};

const mapDispatchToProps = {
  createHomePosts: home.createHomePosts
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateHome);
