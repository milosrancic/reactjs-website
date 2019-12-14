import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/App.css";

import Home from "./Home.js";
import Accomodation from "./Accomodation.js";
import Gallery from "./Gallery.js";
import Contact from "./Contact.js";
import Bookings from "./Bookings.js";
import NotFound from "./NotFound";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <Router>
          {/* nav wiil be transparent */}
          <nav>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/accomodation"} className="nav-link">
                  Accomodation
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/gallery"} className="nav-link">
                  Gallery
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
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/accomodation" component={Accomodation} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
