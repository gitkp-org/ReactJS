import React, { Component } from "react";

class Header extends Component {
  // counter() {
  //   var t = document.getElementById("one");
  //   t.addEventListener(onclick, this.state.count + 1);
  // }

  counter(evt) {
    this.setState({ count: this.state.count + 1 });
  }

  anotherCounter(evt) {
    this.setState({ call: evt.target.value });
  }

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      call: " "
    };

    this.counter = this.counter.bind(this);
    this.anotherCounter = this.anotherCounter.bind(this);
  }

  render() {
    // var count = this.state.count + 1;
    return (
      <div>
        <header className="masthead">
          ><div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Clean Blog</h1>
                  <h1>
                    Virat Kohli Hits a {this.state.count} and {this.state.call}
                  </h1>
                  <input
                    value={this.state.call}
                    onChange={evt => this.anotherCounter(evt)}
                    type="text"
                  />
                  <button onClick={this.counter}>Click</button>

                  <span className="subheading">
                    A Blog Theme by Start Bootstrap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
