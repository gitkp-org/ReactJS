import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import PropTypes from "prop-types"; // ES6
var propTypes = require("prop-types");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h3>Prop number is : {this.props.propNumber}</h3>
        <h3>Prop object is : {this.props.propObject.ob1}</h3>

        <h3>Prop String is : {this.props.mano}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  mano: PropTypes.string,
  propObject: PropTypes.object,
  propString1: PropTypes.string,
  propString: PropTypes.string,
  propNumber: PropTypes.number
};

App.defaultProps = {
  mano: "Mano Sriram",
  propNumber: 18,
  propString1: "Hello from ReactJS!!",
  propString: "Hello from React!!",
  propObject: {
    ob1: "This is Object1",
    ob2: "This is Object2",
    ob3: "This is Object3"
  }
};

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: ["i10", "Merc", "BMW"]
    };
  }

  // handleClick method ...
  handleClick() {
    this.setState({ cars: [this.state.cars.reverse()] });
    // this.setState({ cars: this.state.cars.push("Mano") });
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick.bind(this)}>Just some Information!!</h2>
        <Cars msg="Cars are really cool!!" coolCars={this.state.cars} />
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ["Audi", "Merc", "BMW"]
};

class Cars extends Component {
  render() {
    console.log(Parent.Props);
    return (
      <div>
        <h2>I am from Cars Component!!</h2>
        <div>
          {this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
