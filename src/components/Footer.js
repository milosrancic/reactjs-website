import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="container fixed-bottom" id="footer">
      <div className="container float-left">
        <small className="text-newsletter">
          Newsletter: <input type="text" className="input-newsletter" />
        </small>
        <button type="button" className="ml-1 mt-0 btn btn-sm btn-outline-dark">
          Submit
        </button>

        <p className="float-right">
          <small>by: Milos Rancic</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
