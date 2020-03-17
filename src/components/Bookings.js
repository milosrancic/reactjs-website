import React from "react";
import "../styles/Bookings.css";
// import Calendar from "react-calendar";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

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
          autoFocus={true}
          isOpen={true}
        />
      </div>
    );
  }
}

export default Bookings;
