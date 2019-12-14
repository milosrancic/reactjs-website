import React from "react";
import Room from "./Room";
import "../styles/Accomodation.css";

import accomodation1 from "../images/accomodation-01.jpg";
import accomodation2 from "../images/accomodation-02.jpg";
import accomodation3 from "../images/accomodation-03.jpg";
import accomodation4 from "../images/accomodation-04.jpg";
import accomodation5 from "../images/accomodation-05.jpg";

const Accomodation = () => {
  return (
    <div id="accomodation">
      <h3>Accomodation</h3>
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        beds="1 Queen Bed"
        people="2 People"
        bar="Mini Bar"
        food="Free breakfast"
        gym="Gym access"
        spa="30% off spa"
        feedback="Best for couples"
        img={accomodation2}
      />
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        beds="1 Queen Bed"
        people="2 People"
        bar="Mini Bar"
        food="Free breakfast"
        gym="Gym access"
        spa="30% off spa"
        feedback="Best for couples"
        img={accomodation5}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        beds="1 Queen Bed & 1 Single Bed"
        people="3 People"
        bar="Mini Bar"
        food="Free lunch"
        gym="Gym access"
        spa="50% off spa"
        feedback="Superb"
        img={accomodation4}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        beds="1 Queen Bed & 2 Single Beds"
        people="4 People"
        bar="Mini Bar"
        food="Free lunch"
        gym="Gym access"
        spa="50% off spa"
        feedback="Best value for money"
        img={accomodation3}
      />
      <Room
        title="Family Suite"
        subtitle="Start from $220/night"
        beds="2 Queen Beds & 2 Single Beds"
        people="6 People"
        bar="Mini Bar"
        food="Free breakfast & lunch"
        gym="Gym access"
        spa="Free spa"
        feedback="Guest favorite"
        img={accomodation1}
      />
      <div className="text-center mt-5 mb-4">
        <ul>
          <li>
            <i className="fas fa-wifi"></i>Free WiFi
          </li>
          <li>
            <i className="fas fa-parking"></i>Parking
          </li>
          <li>
            <i className="fas fa-clock"></i>24-hour front desk
          </li>
          <li>
            <i className="fas fa-wheelchair"></i>Facilities for disabled guests
          </li>
          <li>
            <i className="fas fa-paw"></i>Pets allowed
          </li>
          <li>
            <i className="fas fa-concierge-bell"></i>Daily housekeeping
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Accomodation;
