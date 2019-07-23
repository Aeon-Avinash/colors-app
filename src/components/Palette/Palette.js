import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "../ColorBox/ColorBox";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox key={color.color} background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer finally */}
      </div>
    );
  }
}
