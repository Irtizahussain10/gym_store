import axios from "axios";
import React from "react";
import { Redirect } from "react-router";
import { Credentials } from "../../interfaces/interfaces";
import "./signup.css";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    isAccountCreated: false,
  };

  signUp = (credentials: Credentials) => {
    axios
      .post("http://localhost:5000/signUp", credentials)
      .then((res) => {
        if (res.status === 200) {
          alert("The user has been created successfully. Now time to signin ");
          this.setState({ isAccountCreated: true });
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          alert("A user is already registered with this email!");
        } else if (e.response.status === 500) {
          alert("An error occured with the server! Please try again");
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
      name: this.state.name,
      password: this.state.password,
    };
    this.signUp(credentials);
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  render() {
    if (this.state.isAccountCreated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="loginFormContainer">
        <h1 className="formTitle">Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="inputLabel">
            Name
            <br />
            <input
              type="text"
              required
              className="inputElement"
              placeholder="Enter your name"
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <label className="inputLabel">
            Email
            <br />
            <input
              type="email"
              required
              className="inputElement"
              placeholder="Enter email address"
              onChange={this.handleEmailChange}
            />
          </label>
          <br />
          <label className="inputLabel">
            Password
            <br />
            <input
              type="password"
              required
              className="inputElement"
              placeholder="Enter password"
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <input type="submit" value="Signup" className="submitButton" />
        </form>
      </div>
    );
  }
}

export default Signup;
