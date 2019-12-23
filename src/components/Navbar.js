import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="container-fluid">
      <nav className="navbar-inverse">
        <ul className="nav  justify-content-center">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/accomodation"} className="nav-link">
              Accomodation
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/gallery"} className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/bookings"} className="nav-link">
              Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
