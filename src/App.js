import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
import Home from "modules/home/components/home";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
