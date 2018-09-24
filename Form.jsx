import React, { Component } from "react";
import { render } from "react-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
  	this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit(e){
  	e.preventDefault();
  	alert(`Hello ${this.state.username}!`)
  }

  render() {
    let error = null;
    if (/[^A-Z0-9]/gi.test(this.state.username)) {
      error = (
        <p style={{ color: "red" }}>HEY! Only letters and numbers allowed.</p>
      );
    }

    return (
      <div>
        <h1>Create your username (max 8 characters).</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Enter your username"
            name="username"
            value={this.state.username}
            aria-label="Create a Username"
          />
          {error}
          <input type="submit" value="Sign me up!" />
        </form>
              <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Food
            <input
              onChange={this.handleChange}
              placeholder="What food would you like?"
              name="food"
              value={this.state.food}
            />
          </label>
        </div>
        <div>
          <label>
            Quantity
            <select
              value={this.state.quantity}
              onChange={this.handleChange}
              name="quantity"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Place your order" />
      </form>
      </div>
    );
  }
}

export default Form;