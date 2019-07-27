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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const drawerWidth = 400;
const appBarHeight = 64;

const styles = theme => ({
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
  }
});

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.someFn = this.someFn.bind(this);
  }

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

  someFn() {}

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      newPaletteName,
      handleSubmitPalette,
      handleNameChange
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
              Persistent drawer
            </Typography>
            <div className={classes.appButtons}>
              <ValidatorForm
                ref="form"
                onSubmit={handleSubmitPalette}
                onError={errors => console.log(errors)}
              >
                <TextValidator
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
                <Button variant="contained" color="primary" type="submit">
                  Save Palette
                </Button>
              </ValidatorForm>
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles)(NewPaletteFormNav);
