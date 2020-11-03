import React from "react";
import Button from "react-bootstrap/Button";
import "./Room.scss";

const Room = (props) => {
  return (
    <div className="Room">
      <div className="row mt-5">
        <div className="col-md-8">
          <img src={props.img} className="img-fluid" alt="accomodation room" />
        </div>
        <div className="col-md-4">
          <span className="feedback">{props.feedback}</span>
          <h4 className="title">{props.title}</h4>
          <p>{props.subtitle}</p>
          <ul className="icons">
            <li>
              <i className="fas fa-bed"></i> {props.beds}
            </li>
            <li>
              <i className="fas fa-male"></i> {props.people}
            </li>
            <li>
              <i className="fas fa-glass-martini-alt"></i> {props.bar}
            </li>
            <li>
              <i className="fas fa-utensils"></i> {props.food}
            </li>
            <li>
              <i className="fas fa-dumbbell"></i> {props.gym}
            </li>
            <li>
              <i className="fas fa-spa"></i> {props.spa}
            </li>
          </ul>
          <Button variant="danger" size="sm" className="room-btn ml-1">
            Book this {props.btnTitle}!
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Room;
