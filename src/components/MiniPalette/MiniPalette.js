import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal"
  },
  secondary: {
    background: "pink",
    "& h1": {
      color: "white",
      "& span": {
        background: "yellowgreen"
      }
    }
  }
};

const MiniPalette = ({ classes }) => {
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>
          Mini Palette <span>ahkjldfg</span>
        </h1>
        <span>ahkjldfg</span>
      </section>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
