import { connect } from "react-redux";
import CreateHome from "./CreateHome";
import { actions as home } from "modules/home/ducks/home";

const mapStateToProps = store => {
  return {
    postCreated: store.Home.postCreated
  };
};

const mapDispatchToProps = {
  createPosts: home.createPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateHome);
