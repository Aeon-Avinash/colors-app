import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import styles from "../../styles/DrawerNewPaletteForm-styles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.someFn = this.someFn.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorUnique", value => {
      if (
        !this.props.colors.find(
          color =>
            color.color.toLowerCase() === this.props.currentColor.toLowerCase()
        )
      ) {
        return true;
      }
      return false;
    });
    ValidatorForm.addValidationRule("isNameUnique", value => {
      if (
        !this.props.colors.find(
          color => color.name.toLowerCase() === value.toLowerCase()
        )
      ) {
        return true;
      }
      return false;
    });
  }

  someFn() {}

  render() {
    const {
      classes,
      maxColors,
      open,
      colors,
      currentColor,
      newColorName,
      handleDrawerClose,
      handleNameChange,
      addNewColor,
      addRandomColor,
      setCurrentColor,
      clearColors
    } = this.props;
    const paletteIsFull = colors.length >= maxColors;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.drawerContainer}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.drawerButtons}>
            <Button variant="contained" color="secondary" onClick={clearColors}>
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={setCurrentColor}
            className={classes.colorPicker}
          />
          <ValidatorForm
            ref="form"
            onSubmit={addNewColor}
            onError={errors => console.log(errors)}
            className={classes.drawerForm}
          >
            <TextValidator
              label="Color Name"
              onChange={handleNameChange}
              name="newColorName"
              value={newColorName}
              validators={["required", "isColorUnique", "isNameUnique"]}
              errorMessages={[
                "this field is required",
                "color already used",
                "color name is not unique"
              ]}
              variant="filled"
              margin="normal"
              className={classes.textInputField}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.addColorButton}
              style={{
                backgroundColor: !paletteIsFull ? currentColor : "#e0e0e0"
              }}
              disabled={paletteIsFull}
              type="submit"
            >
              {!paletteIsFull ? "Add Color" : "Palette Full"}
            </Button>
          </ValidatorForm>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
