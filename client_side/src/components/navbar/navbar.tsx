import React from "react";
import { Link } from "react-router-dom";
import CategoryIcon from "@material-ui/icons/Category";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { loginProps } from "../../interfaces/interfaces";
import "./navbar.css";
import axios from "axios";

class NavBar extends React.Component<loginProps> {
  handleLogout = () => {
    localStorage.clear();
    this.props.setLoggedIn(
      JSON.parse(localStorage.getItem("isLoggedIn") as string) === true
    );
  };

  state = {
    base64: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/getLogo", {
        responseType: "arraybuffer",
      })
      .then((res) => {
        this.setState({
          base64: Buffer.from(res.data, "binary").toString("base64"),
        });
      })
      .catch((e) => {
        if (e.response.status === 400) {
          alert("Incorrect email or password");
        } else if (e.response.status === 500) {
          alert("An error occured within the server! Please try again");
        } else {
          alert(
            "Oops an error occured! Please check your internet connection."
          );
        }
      });
  }

  render() {
    return (
      <header className="navBar">
        <ul>
          <Link to="/" className="link">
            <li id="logo">
              <img
                className="logo"
                alt=""
                src={`data:image/jpg;charset=utf-8;base64,${this.state.base64}`}
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
