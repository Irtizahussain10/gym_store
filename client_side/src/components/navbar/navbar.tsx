import React from "react";
import { Link } from "react-router-dom";
import CategoryIcon from "@material-ui/icons/Category";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Props } from "../../interfaces/interfaces";
import "./navbar.css";

class NavBar extends React.Component<Props> {
  handleLogout = () => {
    localStorage.clear();
    this.props.setLoggedIn(
      JSON.parse(localStorage.getItem("isLoggedIn") as string) === true
    );
  };

  render() {
    return (
      <header className="navBar">
        <ul>
          <Link to="/" className="link">
            <li id="logo">
              <img
                className="logo"
                alt=""
                src="src\584c2ea7-11b8-4f40-a26d-ba5dddf9c97f.jpg"
              />
            </li>
          </Link>
          <li id="store">
            <Link to="/store" className="link">
              Store
            </Link>
          </li>
          <Link to="/categories" className="link">
            <li id="categories">
              <CategoryIcon />
              Categories
            </li>
          </Link>
          <Link to="/contactUs" className="link">
            <li id="contactUs">
              <ContactSupportIcon /> Contact us
            </li>
          </Link>
          {!this.props.isLoggedIn ? (
            <>
              <Link to="/login" className="link">
                <li id="login">Login</li>
              </Link>
              <Link to="/signup" className="link">
                <li id="signup">Signup</li>
              </Link>
            </>
          ) : (
            <>
              <li id="username">
                {(localStorage.getItem("name") as string).split(" ")[0]}
              </li>
              <li
                id="logout"
                onClick={() => {
                  this.handleLogout();
                }}
              >
                Logout
              </li>
            </>
          )}
        </ul>
      </header>
    );
  }
}

export default NavBar;
