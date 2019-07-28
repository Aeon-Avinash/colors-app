import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import arrayMove from "array-move";
import DraggableColorList from "../../hocs/DraggableColorList/DraggableColorList";
import NavNewPaletteForm from "../NavNewPaletteForm/NavNewPaletteForm";
import DrawerNewPaletteForm from "../DrawerNewPaletteForm/DrawerNewPaletteForm";
import styles from "../../styles/NewPaletteForm-styles";

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
      currentColor: "#009688",
      colors: this.props.palettes[0].colors,
      newColorName: "",
      newPaletteName: ""
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
    this.handleDeleteColor = this.handleDeleteColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.handleSubmitPalette = this.handleSubmitPalette.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  componentDidMount() {
    this.setState({ currentColor: this.generateUniqueRandomColor() });
  }

  handleDrawerOpen() {
    this.setState({ openDrawer: true });
  }

  handleDrawerClose() {
    this.setState({ openDrawer: false });
  }

  handleNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  setCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
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

  addRandomColor() {
    let newColor;
    const currentColors = this.state.colors.map(color =>
      color.color.toUpperCase()
    );
    const allColors = this.props.palettes.map(p => p.colors).flat();
    do {
      const rnd = Math.floor(Math.random() * allColors.length);
      if (!currentColors.includes(allColors[rnd].color.toUpperCase())) {
        newColor = allColors[rnd];
      }
    } while (!newColor);
    this.setState(prevState => ({
      colors: [...prevState.colors, newColor],
      newColorName: "",
      currentColor: this.generateUniqueRandomColor()
    }));
  }

  handleDeleteColor(colorName) {
    this.setState({
      colors: this.state.colors.filter(
        color => color.name.toLowerCase() !== colorName.toLowerCase()
      )
    });
  }

  clearColors() {
    this.setState({
      colors: []
    });
  }

  handleSubmitPalette(emojiVal) {
    const newPaletteName = this.state.newPaletteName || "Some Palette Name";
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: emojiVal.native,
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

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  }

  render() {
    const { classes, palettes } = this.props;
    const {
      openDrawer,
      dialogStage,
      colors,
      currentColor,
      newColorName,
      newPaletteName
    } = this.state;
    return (
      <div className={classes.root}>
        <NavNewPaletteForm
          open={openDrawer}
          stage={dialogStage}
          newPaletteName={newPaletteName}
          handleNameChange={this.handleNameChange}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmitPalette={this.handleSubmitPalette}
          palettes={palettes}
        />
        <DrawerNewPaletteForm
          open={openDrawer}
          colors={colors}
          currentColor={currentColor}
          newColorName={newColorName}
          handleDrawerClose={this.handleDrawerClose}
          handleNameChange={this.handleNameChange}
          addNewColor={this.addNewColor}
          addRandomColor={this.addRandomColor}
          setCurrentColor={this.setCurrentColor}
          clearColors={this.clearColors}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: openDrawer
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            handleDeleteColor={this.handleDeleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={12}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
