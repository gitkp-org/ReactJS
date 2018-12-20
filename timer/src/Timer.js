import React, { Component } from "react";

class Timer extends Component {
  componentDidMount() {
    this.timer = setInterval(this.ticker, 1000);
  }

  ticker() {
    this.setState({ clock: this.state.clock + 1 });
  }

  constructor(props) {
    super(props);
    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Timer!!</h3>
        <h2>19.0129</h2>
        <h1>{this.state.clock} Seconds</h1>
      </div>
    );
  }
}

export default Timer;
