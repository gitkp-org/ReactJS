import React, { Component } from "react";
import "./App.css";
import Usurvey from "./Usurvey";

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/home').then(data => console.log(data.json())).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Usurvey />
      </div>
    );
  }
}

export default App;
