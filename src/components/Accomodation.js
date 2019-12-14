import React from "react";
import Room from "./Room";
import "../styles/Accomodation.css";

import accomodation1 from "../images/accomodation-01.jpg";
import accomodation2 from "../images/accomodation-02.jpg";
import accomodation3 from "../images/accomodation-03.jpg";
import accomodation4 from "../images/accomodation-04.jpg";
import accomodation5 from "../images/accomodation-05.jpg";

// each room will have its own "more information" button, and when hovered over it will show more info right there

const Accomodation = () => {
  return (
    <div id="accomodation">
      <h3>Accomodation</h3>
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        beds="1 Queen Bed"
        people="2"
        complimentary="Free breakfast"
        spa="30% discount on spa"
        img={accomodation2}
      />
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        beds="1 Queen Bed"
        people="2"
        complimentary="Free breakfast"
        spa="30% discount on spa"
        img={accomodation5}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        beds="1 Queen Bed & 1 Single Bed"
        people="3"
        complimentary="Free lunch"
        spa="50% discount on spa"
        img={accomodation4}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        beds="1 Queen Bed & 2 Single Beds"
        people="4"
        complimentary="Free lunch"
        spa="50% discount on spa"
        feedback="Superb"
        img={accomodation3}
      />
      <Room
        title="Family Suite"
        subtitle="Start from $220/night"
        beds="2 Queen Beds & 2 Single Beds"
        people="6"
        complimentary="Free breakfast & lunch"
        spa="Complimentary spa"
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
