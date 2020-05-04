import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../firebase";

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

const Form = ({ page, history }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    if (page === "register") {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/");
        })
        .catch((error) => setErrorMessage(error.message));
    } else if (page === "login") {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/");
        })
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <form>
      <div className="inputs">
        <h1>{data[page].header}</h1>
        {errorMessage ? <h4>{errorMessage}</h4> : ""}
        <div className="labels">Email</div>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="labels">Password</div>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div id="login-link">
        <button onClick={handleAuth}>Submit</button>
      </div>
      <div className="row">
        <p>{data[page].message}</p>
        {data[page].comp}
      </div>
    </form>
  );
};

export default withRouter(Form);
