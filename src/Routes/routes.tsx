import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import Categories from "../components/categories/categories";
import Store from "../components/store/store";
import Home from "../components/home/home";
import ContactUs from "../components/contactUs/contactUs";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/categories">
              <Categories />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/store">
              <Store />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/contactUs">
              <ContactUs />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
