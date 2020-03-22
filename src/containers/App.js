import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "../components/Navbar";
import Home from "../components/home/Home";
import Accomodation from "../components/accomodation/Accomodation";
import Activities from "../components/activities/Activities";
import Contact from "../components/contact/Contact";
import Bookings from "../components/Bookings";
import NotFound from "../components/NotFound";
import Footer from "../components/footer/Footer";

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
        <Footer />
      </div>
    );
  }
}

export default App;
