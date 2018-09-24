import React, { Component } from "react";
import { render } from "react-dom";
import Form from "./Form.jsx";

class App extends Component {
  handleClick() {
    alert("click!");
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));