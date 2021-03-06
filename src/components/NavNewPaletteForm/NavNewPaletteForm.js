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
    this.handleEmojiSelect = this.handleEmojiSelect.bind(this);
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

  handleEmojiSelect(emojiVal) {
    this.props.handleSubmitPalette(emojiVal);
    this.handleCloseDialog();
  }

  render() {
    const {
      classes,
      open,
      stage,
      handleDrawerOpen,
      newPaletteName,
      handleNameChange,
      palettes
    } = this.props;
    const { showFormDialog, showEmojiDialog } = this.state;
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
        {(showFormDialog || showEmojiDialog) && (
          <MetaNewPaletteForm
            showFormDialog={showFormDialog}
            showEmojiDialog={showEmojiDialog}
            stage={stage}
            handleCloseFormDialog={this.handleCloseDialog}
            handleEmojiSelect={this.handleEmojiSelect}
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
