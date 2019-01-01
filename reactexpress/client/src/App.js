import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/customers/customers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Customer />
      </div>
    );
  }
}

export default App;
