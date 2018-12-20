import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    persons: [{ name: "Mano", age: 19 }, { name: "Sriram", age: 90 }],
    num: 10
  };

  clickHandler = () => {
    this.setState({
      persons: [{ name: "Steve", age: 19 }, { name: "Jobs", age: 95 }]
    });
  };

  render() {
    return (
      <div className="App">
        <h3>
          0 -> {this.state.persons[0].name} is of age{" "}
          {this.state.persons[0].age}
          <br />
          <br />1 -> {this.state.persons[1].name} is of age{" "}
          {this.state.persons[1].age}
          <Parent />
          <button onClick={this.clickHandler}>Click Here!</button>
        </h3>
        <p>{this.props.propObject.obj1}</p>
        <p>{this.props.propObject.obj2}</p>
        <p>{this.props.propObject.obj3}</p>
        <p>{this.props.propString}</p>
        <Body />
      </div>
    );
  }
}
App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
};

App.defaultProps = {
  propNumber: 3,
  propString: "Mano Sriram which is a Prop String!",
  propObject: {
    obj1: "I am Object 1..",
    obj2: "I am Object 2..",
    obj3: "I am Object 3.."
  }
};

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = { cars: ["Great Volkswagen", "someOtherCar"] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      cars: this.state.cars.reverse()
    });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Hey there from Parent!</h1>
        <p>All People : </p>

        <Cars msg="Cars are Cool !" coolCars={this.state.cars} />
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ["Volkswagen", "someOtherCar"]
};

class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>I am {Math.floor(Math.random() * 100)}</h2>
        <p>{this.props.msg}</p>
        <p>
          <div>
            {this.props.coolCars.map((item, i) => {
              return <p key={i}> {item} </p>;
            })}
          </div>
        </p>
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

    this.genRan = this.genRan.bind(this);
  }

  genRan = () => {
    this.setState({
      r: Math.floor(Math.random() * 50)
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.genRan}>Generate Random Number</button>
        <Numbers myNumber={this.state.r} />
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount() {
    console.log("Component will Mount called!!");
  }

  componentDidMount() {
    console.log("Component did Mount called!!");
  }

  componentWillReceiveProps() {
    console.log("Component receive Mount called!!");
  }

  render() {
    return (
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
