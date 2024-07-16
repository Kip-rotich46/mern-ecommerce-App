import React, { SyntheticEvent, useState } from "react";
import { UserErrors } from "../../error";
import axios from "axios";

const Auth = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {

      await axios.post("http://localhost:3001/user/register", {
        username,
        password,
      });

      alert("Registration successful. You can now Login");
    } catch (err: any) {
      if (err?.response?.type === UserErrors.USERNAME_ALREADY_EXISTS) {
        alert("ERROR: Username Already In Use");
      } else {
        alert("ERROR: Something went wrong");
      }
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="username"> Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {

      await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });

      alert('Login Successful.')
      
    } catch (err:any) {
      if (err?.response?.type === UserErrors.USER_NOT_FOUND) {
        alert("ERROR: Username Doesn't Not Exist");
      } else {
        alert("ERROR: Something went wrong");
      }
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="username"> Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" value={password} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
