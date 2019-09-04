import React from "react";
import "../styles/Bookings.css";
import Calendar from "react-calendar";

import ReactCalendar from "react-calendar/dist/entry.nostyle";

// helpers
// const dateAlreadyClicked = (dates, date) => dates.some(d => dayjs(date).isSame(dayjs(d), 'day'))
// const datesExcept = (dates, date) => dates.filter(d => !dayjs(date).isSame(dayjs(d), 'day'))

const Bookings = () => {
  // const [dates, setDates] = useState([])

  const onClickDay = date => {};

  const tileClassName = ({ date }) => {};

  return (
    <ReactCalendar tileClassName={tileClassName} onClickDay={onClickDay} />
  );
};

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

// class Bookings extends React.Component {
//   state = {
//     date1: new Date(),
//     date2: new Date()
//   };

//   onChange1 = date1 => this.setState({ date1 }, console.log(date1));
//   onChange2 = date2 => this.setState({ date2 }, console.log(date2));

//   daysTotal = () => {
//     console.log(this.state.date1, this.state.date2);
//   };

//   render() {
//     // let dateA = this.state.date1;
//     // let date2 = this.state.date2;

//     return (
//       <div id="bookings" className="container">
//         <div className="row">
//           <div className="col">
//             <p>Check-in</p>
//             <Calendar onChange={this.onChange1} value={this.state.date1} />
//           </div>
//           <div className="col">
//             <p>Check-out</p>
//             <Calendar onChange={this.onChange2} value={this.state.date2} />
//           </div>
//         </div>
//         <p className="text-center">{this.daysTotal()}</p>
//       </div>
//     );
//   }
// }

export default Bookings;
