import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLevel = this.handleLevel.bind(this);
  }

  handleLevel(newLevel) {
    this.props.changeLevel(newLevel);
  }

  render() {
    const { level } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>

        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.handleLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}
