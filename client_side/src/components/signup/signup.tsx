import React from "react";
import "./signup.css";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };
  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className="loginFormContainer">
        <h1 className="formTitle">Signup</h1>
        <form onSubmit={this.handleSubmit}>
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
