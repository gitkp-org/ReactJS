import React, { Component } from "react";
import "./App.css";
import Course from "./courseSales";

class App extends Component {
  render() {
    var courses = [
      { name: "ios 11 dev Course!", price: "299" },
      { name: "Bug Bounty Course.", price: "499" },
      { name: "Complete Front end Dev Course.", price: "2499" },
      { name: "Machine Learning Course!", price: "3399" }
    ];
    return (
      <div>
        <Course items={courses} />
      </div>
    );
  }
}

export default App;
