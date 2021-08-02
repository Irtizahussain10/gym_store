import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import CategoryIcon from "@material-ui/icons/Category";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import "./navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <header className="navBar">
        <ul>
          <Link to="/" className="link">
            <li id="logo">
              <img
                className="logo"
                src="src\584c2ea7-11b8-4f40-a26d-ba5dddf9c97f.jpg"
              />
            </li>
          </Link>
          <li id="searchBar">
            <SearchBar />
          </li>
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
        </ul>
      </header>
    );
  }
}

export default NavBar;
