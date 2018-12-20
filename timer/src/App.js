import React, { Component } from "react";
import "./App.css";
import Timer from "./timer";

class App extends Component {
  changer() {
    this.setState({ text: "ano" });
  }

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.changer = this.changer.bind(this);
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changer} />

        <h1>Welcome to the Timer App..</h1>
        <h3>{this.props.text}</h3>
        <Timer />
      </div>
    );
  }
}

export default App;
