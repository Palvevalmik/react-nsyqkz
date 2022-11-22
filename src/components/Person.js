import React, { Component } from "react";
import './common.css'

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "Valmik Palve",
      age: 29,
    };
  }

  nameChangeHandler() {
    //alert("hello!");
    console.log(this.state);
    this.setState({ name: "shubham", age: 28 }, () => {
      console.log(this.state);
    });
  }
  render() {
    return (
      <div>
        <h1>
          <i>
            Dear {this.state.name}, {this.state.age} years, Welcome to pune!
          </i>
          <br />
          <button onClick={() => this.nameChangeHandler()}>Click me! to change text</button>
        </h1>
      </div>
    );
  }
}

export default Person;