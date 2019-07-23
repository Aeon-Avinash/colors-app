import React from "react";
import "./App.css";
import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
