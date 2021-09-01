import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import Categories from "../components/categories/categories";
import Store from "../components/store/store";
import Home from "../components/home/home";
import ContactUs from "../components/contactUs/contactUs";
import Login from "../components/login/login";
import Signup from "../components/signup/signup";
import SingleItem from "../components/singleItem/singleItem";
import StoreDisplay from "../components/store/storeDisplay";
import { dumbbells, benches, machines } from "../store";

class Routes extends React.Component {
  state = {
    isLoggedIn:
      JSON.parse(localStorage.getItem("isLoggedIn") as string) === true,
  };

  setLoggedIn = (value: boolean) => {
    this.setState({ isLoggedIn: value });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar
            isLoggedIn={this.state.isLoggedIn}
            setLoggedIn={this.setLoggedIn}
          />

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
            <Route exact path="/categories/dumbbells">
              <div className="container">
                <StoreDisplay data={dumbbells} type={"dumbbell"} />
              </div>
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/categories/benches">
              <div className="container">
                <StoreDisplay data={benches} type={"bench"} />
              </div>
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/categories/machines">
              <div className="container">
                <StoreDisplay data={machines} type={"machine"} />
              </div>
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/store/:item/:id">
              <SingleItem isLoggedIn={this.state.isLoggedIn} />
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

          <Switch>
            <Route exact path="/login">
              {!this.state.isLoggedIn ? (
                <Login
                  isLoggedIn={this.state.isLoggedIn}
                  setLoggedIn={this.setLoggedIn}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/Signup">
              {!this.state.isLoggedIn ? <Signup /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
