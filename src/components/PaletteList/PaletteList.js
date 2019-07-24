import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "../MiniPalette/MiniPalette";

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    color: "white",
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
};

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.goToPalette = this.goToPalette.bind(this);
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;
    const allPalettes = palettes.map(palette => (
      <MiniPalette
        {...palette}
        key={palette.id}
        handleClick={this.goToPalette}
      />
    ));
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>{allPalettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
