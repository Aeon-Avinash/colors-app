import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    const { palettes, handleDelete, classes } = this.props;
    const allPalettes = palettes.map(palette => (
      <CSSTransition key={palette.id} classNames="fade" timeout={500}>
        <MiniPalette
          {...palette}
          handleClick={this.goToPalette}
          handleDelete={handleDelete}
        />
      </CSSTransition>
    ));
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link className={classes.newLink} to="/palette/new">
              Create Palette
            </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {allPalettes}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
