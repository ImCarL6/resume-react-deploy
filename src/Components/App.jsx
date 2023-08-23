import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Resume } from "../Pages/Resume";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/br">
          <Resume lang="br" />
        </Route>
        <Route path="/">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
};