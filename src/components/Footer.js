import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="container fixed-bottom" id="footer">
      <div className="container float-left">
        <small>
          Newsletter: _________{" "}
          <button type="button" className="btn btn-sm btn-outline-dark">
            Submit
          </button>
        </small>
        <p className="float-right">
          <small>by: Milos Rancic</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
