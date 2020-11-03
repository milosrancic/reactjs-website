import React from "react";
import "./Accomodation.scss";
import Room from "./room/Room";

import accomodation01 from "../../assets/images/accomodation-01.jpg";
import accomodation02 from "../../assets/images/accomodation-02.jpeg";
import accomodation03 from "../../assets/images/accomodation-03.jpg";
import accomodation04 from "../../assets/images/accomodation-04.jpg";
import accomodation05 from "../../assets/images/accomodation-05.jpg";

const Accomodation = () => {
  return (
    <div className="Accomodation container my-5">
      <h2>Accomodation</h2>
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        btnTitle="room"
        beds="1 Queen Bed"
        people="2 People"
        bar="Mini Bar"
        food="Free breakfast"
        gym="Gym access"
        spa="30% off spa"
        feedback="Best for couples"
        img={accomodation03}
      />
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        btnTitle="room"
        beds="1 Queen Bed"
        people="2 People"
        bar="Mini Bar"
        food="Free breakfast"
        gym="Gym access"
        spa="30% off spa"
        feedback="Best for couples"
        img={accomodation05}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        btnTitle="suite"
        beds="1 Queen Bed & 1 Single Bed"
        people="3 People"
        bar="Mini Bar"
        food="Free lunch"
        gym="Gym access"
        spa="50% off spa"
        feedback="Superb"
        img={accomodation04}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        btnTitle="suite"
        beds="1 Queen Bed & 2 Single Beds"
        people="4 People"
        bar="Mini Bar"
        food="Free lunch"
        gym="Gym access"
        spa="50% off spa"
        feedback="Best value for money"
        img={accomodation02}
      />
      <Room
        title="Family Suite"
        subtitle="Start from $220/night"
        btnTitle="suite"
        beds="2 Queen Beds & 2 Single Beds"
        people="6 People"
        bar="Mini Bar"
        food="Free breakfast & lunch"
        gym="Gym access"
        spa="Free spa"
        feedback="Guest favorite"
        img={accomodation01}
      />
      <div className="text-center mt-5 mb-4 facility-icons">
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
