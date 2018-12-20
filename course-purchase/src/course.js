import React, { Component } from "react";

class Course extends Component {
  sumPrice(price) {
    this.setState({ total: this.state.total + price });
  }
  constructor() {
    super(props);

    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  render() {
    console.log(this.props.item);
    return <div />;
  }
}

export default Course;
