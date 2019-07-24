import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.handleLevelChange = this.handleLevelChange.bind(this);
  }

  handleLevelChange(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.name} background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.handleLevelChange} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer finally */}
      </div>
    );
  }
}
