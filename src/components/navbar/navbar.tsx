import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CategoryIcon from "@material-ui/icons/Category";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import "./navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <header className="navBar">
        <ul>
          <li id="logo">Logo goes here</li>
          <li id="searchBar">
            <SearchBar />
          </li>
          <li id="store">
            <Link to="/store">Store</Link>
          </li>
          <Link to="/categories">
            <li id="categories">
              <CategoryIcon />
              Categories
            </li>
          </Link>
          <li id="myCart">
            <ShoppingCartIcon /> My Cart
          </li>
          <li id="contactUs">
            <ContactSupportIcon /> Contact us
          </li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
