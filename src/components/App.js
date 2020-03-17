import React from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/App.css";

import Navbar from "./Navbar";
import Home from "./Home.js";
import Accomodation from "./accomodation/Accomodation.js";
import Activities from "./activities/Activities.js";
import Contact from "./Contact.js";
import Bookings from "./Bookings.js";
import NotFound from "./NotFound";
// import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid p-0">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/accomodation" component={Accomodation} />
          <Route path="/activities" component={Activities} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
