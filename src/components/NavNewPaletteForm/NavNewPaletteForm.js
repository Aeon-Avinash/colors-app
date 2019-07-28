import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

import MetaNewPaletteForm from "../MetaNewPaletteForm/MetaNewPaletteForm";
import styles from "../../styles/NavNewPaletteForm-styles";
import AppBarButtons from "../AppBarButtons/AppBarButtons";

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormDialog: false,
      showEmojiDialog: false
    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.shiftDialogStage = this.shiftDialogStage.bind(this);
  }

  handleOpenDialog() {
    this.setState({ showFormDialog: true });
  }

  handleCloseDialog() {
    this.setState({
      showFormDialog: false,
      showEmojiDialog: false
    });
  }

  shiftDialogStage() {
    this.setState({
      showFormDialog: false,
      showEmojiDialog: true
    });
  }

  render() {
    const {
      classes,
      open,
      stage,
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
              <AddToPhotosIcon />
            </IconButton>
            <Typography className={classes.formNavTitle} variant="h6" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <AppBarButtons handleOpenDialog={this.handleOpenDialog} />
        </AppBar>
        {(this.state.showFormDialog || this.state.showEmojiDialog) && (
          <MetaNewPaletteForm
            showFormDialog={this.state.showFormDialog}
            showEmojiDialog={this.state.showEmojiDialog}
            stage={stage}
            handleCloseFormDialog={this.handleCloseDialog}
            handleSubmitPalette={handleSubmitPalette}
            showEmojiPicker={this.shiftDialogStage}
            handleNameChange={handleNameChange}
            newPaletteName={newPaletteName}
            palettes={palettes}
          />
        )}
      </>
    );
  }
}

export default withStyles(styles)(NewPaletteFormNav);
