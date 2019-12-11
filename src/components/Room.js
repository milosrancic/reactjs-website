import React from "react";

import MoreInfo from "./MoreInfo";
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
          <p>{props.subtitle}</p>
          <p>
            <i className="fas fa-bed"> {props.beds}</i>
          </p>
          <p>
            <i class="fas fa-male"> x {props.people}</i>
          </p>
          {props.text}
          {/* <button>More Info</button> */}
        </div>
      </div>
    </div>
  );
};
export default Room;
