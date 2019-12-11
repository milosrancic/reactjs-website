import React from "react";
import "../styles/Room.css";

// CREATE ONE COMPONENT AND THEN RERENDER IT 5 TIMES FOR EACH ROOM
// NO NEED FOR EVERY ROOM TO BE ITS OWN COMPONENT

// each room will have its own "more information" button, and when hovered over it will show more info right there

const Room = props => {
  return (
    <div id="room">
      <div className="row mt-5">
        <div className="col-md-8">
          <img src={props.img} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <h4>{props.title}</h4>
          {/* <p>
            <i class="fas fa-bed"> 1 Twin bed</i>
          </p> */}
          {props.text}
        </div>
      </div>
    </div>
  );
};
export default Room;
