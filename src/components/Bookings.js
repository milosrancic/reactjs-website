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


  daysTotal = () => {
    return
  };

  onChange = date => this.setState({ date })

  render() {
    // let dateA = this.state.date1;
    // let date2 = this.state.date2;

    return (
      <div id="bookings" className="container text-center">

        <p>Check-in</p>
        <DateRangePicker
          onChange={this.onChange}
          value={this.state.date}
          isOpen={true}
          format="dd-MM-y"
          rangeDivider=" to "
        />
        {/* </div> */}


        <p className="text-left">you are staying for {this.daysTotal()} days </p>
      </div>
    );
  }
}

export default Bookings;
