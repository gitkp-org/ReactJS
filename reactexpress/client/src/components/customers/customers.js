import React, { Component } from "react";
const axios = require("axios");

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/customers")
      .then(customers => this.setState({ customers: customers.data }))
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
      </div>
    );
  }
}

export default Customer;
