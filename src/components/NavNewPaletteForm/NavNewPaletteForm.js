import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import MetaNewPaletteForm from "../MetaNewPaletteForm/MetaNewPaletteForm";
import styles from "../../styles/NavNewPaletteForm-styles";

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.someFn = this.someFn.bind(this);
  }

  someFn() {}

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      newPaletteName,
      handleSubmitPalette,
      handleNameChange,
      palettes
    } = this.props;
    return (
      <>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.appButtons}>
            <MetaNewPaletteForm
              handleSubmitPalette={handleSubmitPalette}
              handleNameChange={handleNameChange}
              newPaletteName={newPaletteName}
              palettes={palettes}
            />
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles)(NewPaletteFormNav);
