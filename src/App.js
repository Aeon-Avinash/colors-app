import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PaletteList from "./components/PaletteList/PaletteList";
import Palette from "./components/Palette/Palette";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import NewPaletteForm from "./components/NewPaletteForm/NewPaletteForm";
import Page from "./components/Page/Page";

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
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={routeProps => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          handleDelete={this.handleDeletePalette}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={routeProps => (
                      <Page>
                        <NewPaletteForm
                          {...routeProps}
                          savePalette={this.savePaletteToList}
                          palettes={this.state.palettes}
                        />
                      </Page>
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
                          <Page>
                            <Palette palette={generatePalette(paletteFound)} />
                          </Page>
                        );
                      } else {
                        return (
                          <Page>
                            <h1>Palette not found!</h1>
                          </Page>
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
                          <Page>
                            <SingleColorPalette
                              palette={singleColorPaletts}
                              paletteId={paletteId}
                              emoji={paletteFound.emoji}
                              {...routeProps}
                            />
                          </Page>
                        );
                      } else {
                        return (
                          <Page>
                            <h1>Palette not found!</h1>
                          </Page>
                        );
                      }
                    }}
                  />
                  <Route
                    render={routeProps => (
                      <Page>
                        <h1>Page not found!</h1>
                      </Page>
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

export default withRouter(App);
