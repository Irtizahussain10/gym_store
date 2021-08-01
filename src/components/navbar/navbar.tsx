import React from "react";
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
          <li id="quality">Quality</li>
          <li id="store">Store</li>
          <li id="categories">
            <CategoryIcon />
            Categories
          </li>
          <li id="myCart">
            <ShoppingCartIcon /> My Cart
          </li>
          <li id="contactUs">
            <ContactSupportIcon /> Contact us
          </li>
          <li id="login">Login</li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
