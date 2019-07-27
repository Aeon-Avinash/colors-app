import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "../../styles/DraggableColorBox-styles";

class DraggableColorBox extends Component {
  constructor(props) {
    super(props);
    this.clickDelete = this.clickDelete.bind(this);
  }
  clickDelete() {
    this.props.deleteColor(this.props.name);
  }
  render() {
    const { classes, name } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <span onClick={this.clickDelete}>
            <DeleteIcon className={classes.deleteIcon} />
          </span>
        </div>
      </div>
    );
  }
}

export default SortableElement(withStyles(styles)(DraggableColorBox));
