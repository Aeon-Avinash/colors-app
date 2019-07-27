import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import seedColors from "../../seedColors";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";

const drawerWidth = 400;
const appBarHeight = 64;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    height: `${appBarHeight}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }).AppBar,
    display: "flex"
  },
  appButtons: {
    marginLeft: "auto",
    display: "flex"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
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
  },
  content: {
    flexGrow: 1,
    height: `calc(100vh - ${appBarHeight}px)`,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentColor: "#009688",
      colors: [...seedColors[0].colors],
      newColorName: "",
      newPaletteName: ""
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleSubmitPalette = this.handleSubmitPalette.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    this.setState({ currentColor: this.generateUniqueRandomColor() });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      if (
        !this.state.colors.find(
          color =>
            color.color.toLowerCase() === this.state.currentColor.toLowerCase()
        )
      ) {
        return true;
      }
      return false;
    });
    ValidatorForm.addValidationRule("isNameUnique", value => {
      if (
        !this.state.colors.find(
          color => color.name.toLowerCase() === value.toLowerCase()
        )
      ) {
        return true;
      }
      return false;
    });
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

  handleDrawerOpen() {
    this.setState({ open: true });
  }
  handleDrawerClose() {
    this.setState({ open: false });
  }
  setCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addNewColor() {
    const { currentColor, newColorName } = this.state;
    this.setState(prevState => ({
      colors: [
        ...prevState.colors,
        { color: currentColor, name: newColorName }
      ],
      newColorName: "",
      currentColor: this.generateUniqueRandomColor()
    }));
  }
  handleSubmitPalette() {
    const newPaletteName = this.state.newPaletteName || "Some Palette Name";
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "someEmoji",
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.setState({
      newPaletteName: ""
    });
    this.props.history.push("/");
  }
  generateUniqueRandomColor() {
    const allColors = this.state.colors.map(color => color.color.toUpperCase());
    let newColor;
    do {
      newColor = "#";
      const hexArr = "0123456789ABCDEF";
      for (let i = 0; i < 6; i++) {
        const rnd = Math.floor(Math.random() * hexArr.length);
        newColor += hexArr[rnd];
      }
      if (allColors.includes(newColor)) {
        newColor = undefined;
      }
    } while (!newColor);
    return newColor;
  }

  render() {
    const { classes } = this.props;
    const { open, currentColor, newColorName, newPaletteName } = this.state;
    return (
      <div className={classes.root}>
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
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
            <div className={classes.appButtons}>
              <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmitPalette}
                onError={errors => console.log(errors)}
              >
                <TextValidator
                  label="Color Name"
                  onChange={this.handleNameChange}
                  name="newPaletteName"
                  value={newPaletteName}
                  validators={["required", "isPaletteUnique"]}
                  errorMessages={[
                    "this field is required",
                    "Palette name is not unique"
                  ]}
                />
                <Button variant="contained" color="primary" type="submit">
                  Save Palette
                </Button>
              </ValidatorForm>
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </div>
          </Toolbar>
        </AppBar>
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
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
          </div>

          <ChromePicker
            color={currentColor}
            onChangeComplete={this.setCurrentColor}
          />
          <ValidatorForm
            ref="form"
            onSubmit={this.addNewColor}
            onError={errors => console.log(errors)}
          >
            <TextValidator
              label="Color Name"
              onChange={this.handleNameChange}
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
              style={{ backgroundColor: currentColor }}
              type="submit"
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.colors.map((color, i) => (
            <DraggableColorBox key={i} color={color.color} name={color.name} />
          ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
