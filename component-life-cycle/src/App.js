import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Life Cycle</h2>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0
    };
    this.randomNumber = this.randomNumber.bind(this);
  }

  randomNumber() {
    this.setState({ r: Math.floor(Math.random() * 100) });
    // this.setState({ r: this.state.r + 1 });
  }

  render() {
    return (
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.randomNumber}> Click Me</button>
        <h1>{this.state.r}</h1>
      </div>
    );
  }
}

export default App;
