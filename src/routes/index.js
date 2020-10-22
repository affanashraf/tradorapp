import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact >
        <Home />
      </Route>
      <Route path="/login" exact >
        <Login />
      </Route>
      <Route path="/signup" exact >
        <SignUp />
      </Route>
      <Route path="/about" exact >
        <About />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
