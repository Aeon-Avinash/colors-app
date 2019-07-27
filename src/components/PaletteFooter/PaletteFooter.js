import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../../styles/PaletteFooter-styles";

const PaletteFooter = ({ colorId, paletteId, emoji, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {colorId ? `${colorId} - ` : ""}
      {paletteId} -<span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
