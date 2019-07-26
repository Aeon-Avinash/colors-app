import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
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
  }

  handleFormatChange(format) {
    this.setState({ format });
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
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar format={format} changeFormat={this.handleFormatChange} />
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link className={classes.backButton} to={`/palette/${paletteId}`}>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter colorId={colorId} paletteId={paletteId} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
