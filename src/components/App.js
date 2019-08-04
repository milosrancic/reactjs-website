import React from "react";
import "../styles/App.css";
import A from "./A.js";
import B from "./B.js";
import C from "./C.js";

class App extends React.Component {
  render() {
    return (
      <div className="App text-center">
        <A />
        <B />
        <C />
      </div>
    );
  }
}

export default App;
