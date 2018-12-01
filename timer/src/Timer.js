import React, { Component } from "react";

class Timer extends Component {
  // Start Once when the Page Reloads...
  componentDidMount() {
    setInterval(this.ticker, 1000);
  }

  // A method for make clock ticking..
  ticker() {
    this.setState({ clock: new Date() - this.props.start });
  }

  // Constructor to set clock to start from 0
  constructor(props) {
    super(props);

    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }
  render() {
    // For Positive Integers..
    //console.log(Date());

    var clock = Math.round(this.state.clock / 1000);
    return (
      <div>
        <h4>You have been on this Website since : </h4>
        <span> {clock}</span>
      </div>
    );
  }
}

export default Timer;
