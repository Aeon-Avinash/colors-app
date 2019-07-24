import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <h1>Palette List</h1>} />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => {
              const { id } = routeProps.match.params;
              const paletteFound = this.findPalette(id);
              if (paletteFound) {
                return <Palette palette={generatePalette(paletteFound)} />;
              } else {
                return <h1>Palette not found!</h1>;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
