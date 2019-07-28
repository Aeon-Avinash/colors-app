import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../../styles/MiniPalette-styles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.miniPaletteClicked = this.miniPaletteClicked.bind(this);
    this.miniPaletteDeleted = this.miniPaletteDeleted.bind(this);
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.id === this.props.id) {
  //     return false;
  //   }
  //   return true;
  // }

  miniPaletteClicked() {
    this.props.handleClick(this.props.id);
  }

  miniPaletteDeleted(e) {
    e.stopPropagation();
    this.props.handleDelete(this.props.id);
  }
  render() {
    const { id, classes, paletteName, emoji, colors } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      />
    ));
    return (
      <div className={classes.root} onClick={this.miniPaletteClicked}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={this.miniPaletteDeleted}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
