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
import DumbbellStore from "../components/store/dumbbellStore";
import BenchStore from "../components/store/benchStore";
import MachineStore from "../components/store/machineStore";
import SingleItem from "../components/singleItem/singleItem";

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
          <Route exact path="/categories/dumbbells">
            <div className="container">
              <DumbbellStore />
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/categories/benches">
            <div className="container">
              <BenchStore />
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/categories/machines">
            <div className="container">
              <MachineStore />
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/store/:item/:id">
            <SingleItem />
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
            {!isLoggedIn ? (
              <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/Signup">
            {!isLoggedIn ? <Signup /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
