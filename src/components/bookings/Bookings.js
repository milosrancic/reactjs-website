// import useState, change class based component into functional component and then improve react datepicker

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
      <div className="Bookings container  my-5">
        <h2>Book your stay</h2>

        <div className="text-center my-5">
          <DateRangePicker
            onChange={this.onChange}
            value={this.state.date}
            format="dd-MM-y"

            autoFocus={true}
          />
        </div>

        <div className="row">
          <div className="col-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ratione culpa mollitia unde tempora iusto, dolorum obcaecati nemo repellat, nulla harum doloribus possimus sequi reiciendis repellendus! Quo ea hic nulla illo nobis iure omnis itaque, labore cum qui, quisquam assumenda. Magni minus id ducimus fugit.</div>
          <div className="col-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem mollitia rerum soluta voluptatem aliquam voluptates eligendi commodi ex repellendus cumque beatae nesciunt, corrupti est reiciendis eum suscipit fugiat molestiae fuga repellat accusantium ullam necessitatibus ipsum?</div>
        </div>

      </div>
    );
  }
}

export default Bookings;
