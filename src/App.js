import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="/users">
          <h1>ádfadfasdfasdf</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
