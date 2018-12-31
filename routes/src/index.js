import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Home from "./Home";
import Contact from "./Contact";

import { Router, Route } from "react-router";

ReactDOM.render(
  <Router>
    <Route path="/" component={Home} />
    <Route path="/One" component={Contact} />
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
