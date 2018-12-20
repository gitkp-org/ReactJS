import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Course from "./course";

class App extends Component {
  render() {
    var courses = [
      { name: "Complete Web development", price: 199 },
      { name: "ReactJS development", price: 2000 },
      { name: "Complete Front End development", price: 1888 },
      { name: "Complete Back End development", price: 1999 }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Course item={courses} />
      </div>
    );
  }
}

export default App;
