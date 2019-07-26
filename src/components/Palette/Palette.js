import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import "./Palette.css";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  PaletteColors: {
    height: "90%"
  }
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  handleLevelChange(level) {
    this.setState({ level });
  }

  handleFormatChange(format) {
    this.setState({ format });
  }

  render() {
    const { classes } = this.props;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        paletteId={id}
        colorId={color.id}
        background={color[format]}
        name={color.name}
        showMoreLink={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          format={format}
          changeLevel={this.handleLevelChange}
          changeFormat={this.handleFormatChange}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteId={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
