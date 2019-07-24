import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    const allPalettes = palettes.map(palette => (
      <Link to={`/palette/${palette.id}`} key={palette.id}>
        <MiniPalette {...palette} />
      </Link>
    ));
    return (
      <div>
        <h1>React Colors</h1>
        {allPalettes}
      </div>
    );
  }
}
