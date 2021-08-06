import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <br />
        <br />
        <br />
        <br />
        <span id="heading">Welcome to The Fitness Store</span>
        <br />
        <br />
        <span id="description">
          We sell you the tools to build the body you want
        </span>
        <br />
        <br />
        <br />
        <br />
        <Link id="link" to="/store">
          Navigate to our store
        </Link>
      </div>
    );
  }
}

export default Home;
