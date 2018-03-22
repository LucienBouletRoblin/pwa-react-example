import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import Layout from "modules/common/components/Layout";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts();
    document.title = "Home";
  }
  render() {
    const { online } = this.props;
    return <Layout content={<Main />} sidebar={<SideBar online={online} />} />;
  }
}

export default Home;
