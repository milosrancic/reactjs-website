import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../navigation/Navbar";
import Home from "../home/Home";
import Accomodation from "../accomodation/Accomodation";
import Activities from "../activities/Activities";
import Contact from "../contact/Contact";
import Bookings from "../bookings/Bookings";
import Footer from "../footer/Footer";
import NotFound from "../notFound/NotFound";

const App = () => {
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
  )
}

export default App;