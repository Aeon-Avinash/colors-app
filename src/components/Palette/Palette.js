import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  handleLevelChange(level) {
    this.setState({ level });
  }

  handleFormatChange(format) {
    this.setState({ format });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        paletteId={id}
        colorId={color.id}
        background={color[format]}
        name={color.name}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          format={format}
          changeLevel={this.handleLevelChange}
          changeFormat={this.handleFormatChange}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
