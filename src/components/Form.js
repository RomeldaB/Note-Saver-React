import React from "react";
import { Link } from "react-router-dom";

const data = {
  register: {
    header: "Register",
    message: "Already have an account?",
    comp: <Link to="/login">Login</Link>,
  },
  login: {
    header: "Login",
    message: "Don't have an account yet?",
    comp: <Link to="/register">Register</Link>,
  },
};

export default function Form({ page }) {
  return (
    <form>
      <div className="inputs">
        <h1>{data[page].header}</h1>
        <div className="labels">Email</div>
        <input type="email" placeholder="Your email" />

        <div className="labels">Password</div>
        <input type="password" placeholder="Your password" />
      </div>
      <div id="login-link">
        <Link to="/">{data[page].header}</Link>
      </div>
      <div className="row">
        <p>{data[page].message}</p>
        {data[page].comp}
      </div>
    </form>
  );
}
