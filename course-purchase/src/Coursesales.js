import React, { Component } from "react";

class Coursesales extends Component {
  calculateTotal(price) {
    this.setState({ total: this.state.total + price });
  }

  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  render() {
    console.log(this.props.items);
    var courses = this.props.items.map((item, i) => {
      return (
        <Course
          name={item.name}
          price={item.price}
          key={i}
          calculateTotal={this.calculateTotal}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h1>You can Buy courses..</h1>
        <div id="courses">
          {courses}
          <p id="total">
            Total = <b>{this.state.total}</b>{" "}
          </p>
        </div>
      </div>
    );
  }
}

class Course extends Component {
  clicker() {
    var active = !this.state.active;
    this.setState({ active: active });
    this.props.calculateTotal(active ? this.props.price : -this.props.price);
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this);
  }
  render() {
    return (
      <div>
        <p onClick={this.clicker}>
          {this.props.name}
          <b> {this.props.price}</b>{" "}
        </p>
      </div>
    );
  }
}

export default Coursesales;
