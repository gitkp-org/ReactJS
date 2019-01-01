import React, { Component } from "react";
import "./App.css";
import Usurvey from "./Usurvey";

class App extends Component {
  addProducts() {
    fetch("http://localhost:3000/home/manosriram");
  }

  constructor(props) {
    super(props);
    this.addProducts = this.addProducts.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Usurvey />

        {/* <input type="submit" onClick={this.addProducts} /> */}
        {/* <input type="submit" value="Search" /> */}
        <form action="../../server/auth/auth/" method="POST">
          <input type="text" placeholder="Enter Query!" ref="que" />
          <input type="submit" value="Search!!" />
        </form>
      </div>
    );
  }
}

export default App;
