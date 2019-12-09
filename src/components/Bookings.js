import React from "react";
import "../styles/Bookings.css";
import Calendar from "react-calendar";

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
    date1: new Date(),
    date2: new Date()
  };

  onChange1 = date1 => this.setState({ date1 }, console.log("DATE 1: ", date1));
  onChange2 = date2 => this.setState({ date2 }, console.log("DATE 2: ", date2));

  daysTotal = () => {
    // console.log(this.state.date1, this.state.date2);
  };

  onConsole = () => {
    console.log(this.state.date1.split(" "));
  };

  render() {
    // let dateA = this.state.date1;
    // let date2 = this.state.date2;

    return (
      <div id="bookings">
        <div className="row">
          <div className="col">
            <p>Check-in</p>
            <Calendar onChange={this.onChange1} value={this.state.date1} />
          </div>
          <div className="col">
            <p>Check-out</p>
            <Calendar onChange={this.onChange2} value={this.state.date2} />
          </div>
        </div>
        <p className="text-center">{this.daysTotal()}</p>
      </div>
    );
  }
}

export default Bookings;
