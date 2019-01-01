import React, { Component } from "react";

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch("/api/customers/")
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () => console.log(this.state))
      );
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
