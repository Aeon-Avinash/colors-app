import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background: background }} className="ColorBox">
        <span>{name}</span>
        <span>{"   "}</span>
        <span>MORE</span>
      </div>
    );
  }
}
