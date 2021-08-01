import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../components/navbar";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
          <Switch>
            <Route exact path="/Categories"></Route>
          </Switch>
          <Switch>
            <Route exact path="/Store"></Route>
          </Switch>
          <Switch>
            <Route exact path="/myCart"></Route>
          </Switch>
          <Switch>
            <Route exact path="/login"></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
