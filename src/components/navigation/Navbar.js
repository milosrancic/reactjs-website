import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

import "./Navbar.scss";

const Navbar = () => {
  return (
    <Nav className="Navbar fixed-top justify-content-center" activeKey="/home">
      <Nav.Item>
        <NavLink exact to={"/"} className="nav-link" activeClassName="active-link">
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={"/accomodation"} className="nav-link" activeClassName="active-link">
          Accomodation
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={"/activities"} className="nav-link" activeClassName="active-link">
          Activities
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={"/bookings"} className="nav-link" activeClassName="active-link">
          Bookings
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={"/contact"} className="nav-link" activeClassName="active-link">
          Contact
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};
export default Navbar;
