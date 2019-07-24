import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import "./SingleColorPalette.css";
import PaletteFooter from "../PaletteFooter/PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  handleFormatChange(format) {
    this.setState({ format });
  }

  render() {
    const { format } = this.state;
    const { palette, paletteId, emoji } = this.props;
    const usedPalette = palette.filter(color => color.hex !== "#ffffff");
    const colorId = this.props.palette[0].id;
    const colorBoxes = usedPalette.map(color => (
      <ColorBox
        key={color.hex}
        colorId={color.id}
        background={color[format]}
        name={color.name}
        showMoreLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar format={format} changeFormat={this.handleFormatChange} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter colorId={colorId} paletteId={paletteId} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
