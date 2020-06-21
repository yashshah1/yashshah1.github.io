import React from "react";
import "./main.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home, About } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="*" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
