import React, { Component } from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom"; // you used 'react-dom' as 'ReactDOM'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.yourName = "Ammu";
  }

  timeTick() {
    const element = (
      <div>
        <h1>The time is : </h1>
        <h2> time : {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
  }

  render() {
    const myName = "Mano";

    return (
      <div className="App">
        <h2>Just a H2 Tag!! {setInterval(this.timeTick(), 1000)}</h2>
      </div>
    );
  }
}

export default App;
