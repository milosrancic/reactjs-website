import React from "react";
import "../styles/Room.scss";

const Room = props => {
  return (
    <div id="room">
      <div className="row mt-5">
        <div className="col-md-8">
          <img src={props.img} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <span className="feedback">{props.feedback}</span>
          <h3>{props.title}</h3>
          <p>{props.subtitle}</p>
          <ul>
            <li>
              <i className="fas fa-bed"></i> {props.beds}
            </li>
            <li>
              <i className="fas fa-male"></i>
              {props.people}
            </li>
            <li>
              <i className="fas fa-glass-martini-alt"></i>
              {props.bar}
            </li>
            <li>
              <i className="fas fa-utensils"></i> {props.food}
            </li>
            <li>
              <i className="fas fa-dumbbell"></i>
              {props.gym}
            </li>
            <li>
              <i className="fas fa-spa"></i> {props.spa}
            </li>
          </ul>

          <p>{props.sentence}</p>
        </div>
      </div>
    </div>
  );
};
export default Room;
