import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import styles from "../../styles/SingleColorPalette-styles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.gobackWithHistory = this.gobackWithHistory.bind(this);
  }

  handleFormatChange(format) {
    this.setState({ format });
  }

  gobackWithHistory() {
    this.props.history.goBack();
  }

  render() {
    const { format } = this.state;
    const { palette, paletteId, emoji, classes } = this.props;
    const usedPalette = palette.filter(color => color.hex !== "#ffffff");
    const colorId = this.props.palette[0].id;
    const colorBoxes = usedPalette.map(color => (
      <ColorBox
        key={color.hex}
        colorId={color.id}
        background={color[format]}
        name={color.name}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar format={format} changeFormat={this.handleFormatChange} />
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Button
              className={classes.backButton}
              onClick={this.gobackWithHistory}
            >
              Go Back
            </Button>
          </div>
        </div>
        <PaletteFooter colorId={colorId} paletteId={paletteId} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
