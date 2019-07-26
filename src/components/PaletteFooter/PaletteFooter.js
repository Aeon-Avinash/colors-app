import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  PaletteFooter: {
    backgroundColor: "#fff",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold"
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1rem"
  }
};

const PaletteFooter = ({ colorId, paletteId, emoji, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {colorId ? `${colorId} - ` : ""}
      {paletteId} -<span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
