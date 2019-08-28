import React from "react";
import "../styles/Bookings.css";
import Calendar from "react-calendar";

const Bookings = () => {
  return (
    <div id="bookings" className="container">
      <div className="row">
        <div className="col">
          <p>Check-in</p>
          <Calendar />
        </div>

        <div className="col">
          <p>Check-out</p>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

// class Bookings extends React.Component {
//   state = {
//     date: new Date()
//   };

//   onChange = date => this.setState({ date });

//   render() {
//     return (
//       <div className="container">
//         <Calendar onChange={this.onChange} value={this.state.date} />
//       </div>
//     );
//   }
// }

export default Bookings;
