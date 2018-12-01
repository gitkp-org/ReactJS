import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Coursesales from "./Coursesales";

class App extends Component {
  render() {
    var courses = [
      { name: "Complete Web Dev", price: 1999 },
      { name: "Complete App Dev", price: 1222 },
      { name: "Complete Pentesting Dev", price: 344 },
      { name: "Complete Front end Dev", price: 1999 }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
