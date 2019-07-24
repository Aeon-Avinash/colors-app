import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    const allPalettes = palettes.map(palette => (
      <Link to={`/palette/${palette.id}`} key={palette.id}>
        <h1>{palette.paletteName}</h1>
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
