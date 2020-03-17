import React from "react";
import "../styles/Bookings.css";
// import Calendar from "react-calendar";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

// const Bookings = () => {
//   return (
//     <div id="bookings" className="container">
//       <div className="row">
//         <div className="col">
//           <p>Check-in</p>
//           <Calendar />
//         </div>

//         <div className="col">
//           <p>Check-out</p>
//           <Calendar />
//         </div>
//       </div>
//     </div>
//   );
// };

class Bookings extends React.Component {
  state = {
    date: [new Date(), new Date()],
  };

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="Bookings container text-center">
        <DateRangePicker
          onChange={this.onChange}
          value={this.state.date}
          format="dd-MM-y"
          rangeDivider=" to "
          autoFocus={true}
        />
      </div>
    );
  }
}
// isOpen={true}

export default Bookings;
