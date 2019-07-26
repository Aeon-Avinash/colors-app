import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "../MiniPalette/MiniPalette";
import styles from "../../styles/PaletteList-styles";

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
            <Link className={classes.newLink} to="/palette/new">
              Create New Palette
            </Link>
          </nav>
          <div className={classes.palettes}>{allPalettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
