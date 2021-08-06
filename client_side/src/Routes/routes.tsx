import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import Categories from "../components/categories/categories";
import Store from "../components/store/store";
import Home from "../components/home/home";
import ContactUs from "../components/contactUs/contactUs";
import Login from "../components/login/login";
import Signup from "../components/signup/signup";

function Routes() {
  
  let [isLoggedIn, setLoggedIn] = React.useState<boolean>(
    JSON.parse(localStorage.getItem("isLoggedIn") as string) === true
  );

  return (
    <div>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
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
        <Switch>
          <Route exact path="/login">
            <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
