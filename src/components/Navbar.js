import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <Nav id="navbar" className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Link to={"/"} className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={"/accomodation"} className="nav-link">
          Accomodation
          </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={"/gallery"} className="nav-link">
          Gallery
          </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={"/bookings"} className="nav-link">
          Bookings
          </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={"/contact"} className="nav-link">
          Contact
          </Link>
      </Nav.Item>
    </Nav>
  );
};
export default Navbar;
