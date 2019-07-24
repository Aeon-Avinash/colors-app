import React from "react";
import "./PaletteFooter.css";

const PaletteFooter = ({ colorId, paletteId, emoji }) => {
  return (
    <footer className="Palette-footer">
      {colorId ? `${colorId} - ` : ""}
      {paletteId} -<span className="emoji">{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
