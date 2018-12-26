import React, { Component } from "react";

class Course extends Component {
  sumPrice() {
    this.setState({ total: this.state.total + this.props.price });
  }

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  render() {
    console.log(this.props.items);
    console.log(this.state.total);
    var courses = this.props.items.map((item, i) => {
      return (
        <Coursep
          name={item.name}
          price={item.price}
          key={i}
          sumPrice={this.sumPrice}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h1>You can Buy Courses..</h1>
        <div>
          <p>{courses}</p>
          <h3>Total : {this.state.total}</h3>
        </div>
      </div>
    );
  }
}

class Coursep extends Component {
  clicker() {
    var active = !this.state.active;
    this.setState({ active: active });
    this.props.sumPrice(active ? this.props.price : -this.props.price);
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
          {this.props.name} <b>{this.props.price}</b>
        </p>
      </div>
    );
  }
}

export default Course;
