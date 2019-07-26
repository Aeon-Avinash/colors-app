import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./components/PaletteList/PaletteList";
import Palette from "./components/Palette/Palette";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
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
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={seedColors} {...routeProps} />
            )}
          />
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
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={routeProps => {
              const { paletteId, colorId } = routeProps.match.params;
              const paletteFound = this.findPalette(paletteId);
              const allPalettes = generatePalette(paletteFound).colors;
              const singleColorPaletts = Object.keys(allPalettes).map(shade =>
                allPalettes[shade].find(color => color.id === colorId)
              );

              if (paletteFound && singleColorPaletts) {
                return (
                  <SingleColorPalette
                    palette={singleColorPaletts}
                    paletteId={paletteId}
                    emoji={paletteFound.emoji}
                  />
                );
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
