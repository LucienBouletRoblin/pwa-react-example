import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import Layout from "modules/common/components/Layout";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return <Layout content={<Main />} sidebar={<SideBar />} />;
  }
}

export default Home;
