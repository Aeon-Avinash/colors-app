import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: ({ color }) => color,
    color: "white",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-6px",
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  }
};

const DraggableColorBox = ({ classes, name }) => {
  return <div className={classes.root}>{name}</div>;
};

export default withStyles(styles)(DraggableColorBox);
