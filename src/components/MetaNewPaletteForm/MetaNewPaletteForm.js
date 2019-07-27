import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class MetaNewPaletteForm extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteUnique", value => {
      if (
        !this.props.palettes.find(
          palette => palette.paletteName.toLowerCase() === value.toLowerCase()
        )
      ) {
        return true;
      }
      return false;
    });
  }

  render() {
    const { showFormDialog, showEmojiDialog } = this.props;
    const {
      handleSubmitPalette,
      showEmojiPicker,
      handleNameChange,
      newPaletteName,
      handleCloseFormDialog
    } = this.props;
    return (
      <>
        <Dialog open={showEmojiDialog} onClose={handleCloseFormDialog}>
          <DialogTitle id="form-dialog-title">
            Choose an Emoji for your Palette
          </DialogTitle>
          <Picker onSelect={handleSubmitPalette} title="Palette loves Emoji" />
        </Dialog>
        <Dialog
          open={showFormDialog}
          onClose={handleCloseFormDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm
            ref="form"
            onSubmit={showEmojiPicker}
            onError={errors => console.log(errors)}
          >
            <DialogContent>
              <DialogContentText>
                Please enter a name for your baeutiful new palette. Make sure
                it's unique.
              </DialogContentText>

              <TextValidator
                fullWidth
                margin="normal"
                label="Palette Name"
                onChange={handleNameChange}
                name="newPaletteName"
                value={newPaletteName}
                validators={["required", "isPaletteUnique"]}
                errorMessages={[
                  "this field is required",
                  "Palette name is not unique"
                ]}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleCloseFormDialog} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </>
    );
  }
}

export default MetaNewPaletteForm;
