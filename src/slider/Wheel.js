import React, { Component } from "react";
import Card from "./card";
import "./style.css";
export class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wheel">
        <Card />
      </div>
    );
  }
}

export default Wheel;
