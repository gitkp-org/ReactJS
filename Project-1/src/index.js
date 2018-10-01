import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Intro from "./Intro";

import Header from "./Header";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Intro />, document.getElementById("root"));
registerServiceWorker();
