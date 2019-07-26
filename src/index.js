import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { create } from "jss";
// import jssExtend from "jss-plugin-extend";
import { ThemeProvider } from "@material-ui/styles";
// import { StylesProvider, jssPreset } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import App from "./App";

const theme = createMuiTheme();

// const jss = create({
//   plugins: [...jssPreset().plugins, jssExtend()]
// });

ReactDOM.render(
  // <StylesProvider jss={jss}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  // </StylesProvider>
  document.getElementById("root")
);
