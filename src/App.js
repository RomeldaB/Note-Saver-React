import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import "./App.css";

const App = () => {
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
