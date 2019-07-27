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

const drawerWidth = 400;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

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
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
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

        <ChromePicker color={currentColor} onChangeComplete={setCurrentColor} />
        <ValidatorForm
          ref="form"
          onSubmit={addNewColor}
          onError={errors => console.log(errors)}
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
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{
              backgroundColor: !paletteIsFull ? currentColor : "#e0e0e0"
            }}
            disabled={paletteIsFull}
            type="submit"
          >
            {!paletteIsFull ? "Add Color" : "Palette Full"}
          </Button>
        </ValidatorForm>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
