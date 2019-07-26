import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { create } from "jss";
import jssExtend from "jss-plugin-extend";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import "./index.css";
import App from "./App";

const jss = create({
  plugins: [jssExtend(), ...jssPreset().plugins]
});

ReactDOM.render(
  <StylesProvider jss={jss}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StylesProvider>,
  document.getElementById("root")
);
