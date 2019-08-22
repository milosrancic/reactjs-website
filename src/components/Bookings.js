import React from "react";
import "../styles/Bookings.css";
import Calendar from "react-calendar";

const Bookings = () => {
  return (
    <div id="bookings" className="container">
      <p>Bookings component</p>
      <div className="row">
        <div className="col">
          <Calendar maxDate={new Date()} />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
