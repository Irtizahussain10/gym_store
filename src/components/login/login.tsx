import React from "react";
import "./login.css";

class Login extends React.Component {
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
