import React from "react";
import "../styles/Bookings.css";
import Calendar from "react-calendar";

const Bookings = () => {
  return (
    <div id="bookings" className="container">
      <div className="row">
        <div className="col">
          <p>Check-in</p>
          <Calendar maxDate={new Date()} />
        </div>

        <div className="col">
          <p>Check-out</p>
          <Calendar maxDate={new Date()} />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
