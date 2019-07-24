import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changedCopyState = this.changedCopyState.bind(this);
  }

  changedCopyState() {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }

  render() {
    const { name, background, paletteId, colorId } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changedCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied ? "show" : ""}`}
          />
          <div className={`copy-msg ${copied ? "show" : ""}`}>
            <h1 className="copied-text">copied!</h1>
            <p className="color-text">{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>

          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={e => e.stopPropagation()}
          >
            {" "}
            <span className="see-more">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}
