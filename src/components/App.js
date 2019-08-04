import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";
import A from "./A.js";
import B from "./B.js";
import C from "./C.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  A component
                </Link>
              </li>
              <li>
                <Link to={"/b"} className="nav-link">
                  B component
                </Link>
              </li>
              <li>
                <Link to={"/c"} className="nav-link">
                  C component
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={A} />
            <Route path="/b" component={B} />
            <Route path="/c" component={C} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
