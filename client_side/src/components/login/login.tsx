import axios from "axios";
import React from "react";
import { Redirect } from "react-router-dom";
import { Credentials, Props } from "../../interfaces/interfaces";
import "./login.css";

interface Constructor {
  email: string;
  password: string;
}

class Login extends React.Component<Props, Constructor> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = (credentials: Credentials) => {
    let { email, password } = credentials;
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          let { email, name } = res.data[0];
          localStorage.setItem("email", email);
          localStorage.setItem("name", name);
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          this.props.setLoggedIn(
            JSON.parse(localStorage.getItem("isLoggedIn") as string) === true
          );
        }
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
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    let credentials = {
      email: this.state.email,
      password: this.state.password,
    };
    this.login(credentials);
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="loginFormContainer">
        <h1 className="formTitle">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="inputLabel">
            Email
            <br />
            <input
              className="inputElement"
              type="email"
              required
              onChange={this.handleEmailChange}
              placeholder="Enter email address"
            />
          </label>
          <br />
          <label className="inputLabel">
            Password
            <br />
            <input
              className="inputElement"
              type="password"
              required
              onChange={this.handlePasswordChange}
              placeholder="Enter Password"
            />
          </label>
          <br />
          <input type="submit" value="Login" className="submitButton" />
        </form>
      </div>
    );
  }
}

export default Login;
