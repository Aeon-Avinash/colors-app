import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../../styles/page-styles";

class Page extends Component {
  render() {
    const { classes, children } = this.props;
    return <section className={classes.page}>{children}</section>;
  }
}

export default withStyles(styles)(Page);
