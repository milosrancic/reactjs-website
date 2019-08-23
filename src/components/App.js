import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";

import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Bookings from "./Bookings.js";
import NotFound from "./NotFound";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/bookings"} className="nav-link">
                Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/bookings" component={Bookings} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </ul>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
