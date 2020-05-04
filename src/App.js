import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "./store/actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user is signed in
        dispatch(logIn());
      } else {
        // user is logged out
        dispatch(logOut());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Authentication page="register" />
        </Route>
        <Route path="/login" exact>
          <Authentication page="login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
