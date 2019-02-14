import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
const axios = require("axios");

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      refer: 12
    };
    this.getTrack = this.getTrack.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/customers")
      .then(customers => this.setState({ customers: customers.data }))
      .catch(err => console.log(err));
  }

  getTrack() {
    const firstName = this.refs.one.value;
    const lastName = this.refs.two.value;
    axios
      .post("/subs", { fname: firstName, lname: lastName })
      .then(ret => console.log(ret))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul className="ulist">
          {this.state.customers.map(customer => (
            <h3 key={customer.id}>
              {customer.name} -> {customer.age} -> {customer.location}
              <hr />
            </h3>
          ))}
        </ul>
        <div>
          <input type="text" variant="outlined" ref="one" placeholder="one" />
          <br />
          <br />
          <input
            margin="normal"
            variant="outlined"
            ref="two"
            id="outlined-name"
            placeholder="two"
          />
          <br />
          <br />
          <Button variant="contained" color="secondary" onClick={this.getTrack}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Customer;
