import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PaletteList from "./components/PaletteList/PaletteList";
import Palette from "./components/Palette/Palette";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import NewPaletteForm from "./components/NewPaletteForm/NewPaletteForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || [...seedColors]
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePaletteToList = this.savePaletteToList.bind(this);
    this.handleDeletePalette = this.handleDeletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id);
  }
  savePaletteToList(NewPalette) {
    this.setState(
      { palettes: [...this.state.palettes, NewPalette] },
      this.syncLocalStorage
    );
  }
  handleDeletePalette(id) {
    this.setState(
      { palettes: this.state.palettes.filter(p => p.id !== id) },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={routeProps => (
                      <div className="page">
                        <PaletteList
                          palettes={this.state.palettes}
                          handleDelete={this.handleDeletePalette}
                          {...routeProps}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={routeProps => (
                      <div className="page">
                        <NewPaletteForm
                          {...routeProps}
                          savePalette={this.savePaletteToList}
                          palettes={this.state.palettes}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => {
                      const { id } = routeProps.match.params;
                      const paletteFound = this.findPalette(id);
                      if (paletteFound) {
                        return (
                          <div className="page">
                            <Palette palette={generatePalette(paletteFound)} />
                          </div>
                        );
                      } else {
                        return (
                          <div className="page">
                            <h1>Palette not found!</h1>
                          </div>
                        );
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
                      const singleColorPaletts = Object.keys(allPalettes).map(
                        shade =>
                          allPalettes[shade].find(color => color.id === colorId)
                      );

                      if (paletteFound && singleColorPaletts) {
                        return (
                          <div className="page">
                            <SingleColorPalette
                              palette={singleColorPaletts}
                              paletteId={paletteId}
                              emoji={paletteFound.emoji}
                            />
                          </div>
                        );
                      } else {
                        return <h1>Palette not found!</h1>;
                      }
                    }}
                  />
                  <Route
                    render={() => (
                      <div className="page">
                        <h1>Page not found!</h1>
                      </div>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
