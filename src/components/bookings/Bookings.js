import React, { Component } from "react";
import "./Bookings.scss";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

class Bookings extends Component {
  state = {
    date: [new Date(), new Date()],
  };

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="Bookings container text-center my-5">
        <DateRangePicker
          onChange={this.onChange}
          value={this.state.date}
          format="dd-MM-y"
          autoFocus={true}
        />
      </div>
    );
  }
}
// isOpen={true}

export default Bookings;
