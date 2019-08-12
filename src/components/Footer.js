import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="container fixed-bottom" id="footer">
      <p className="container float-left">
        Newsletter: _____{" "}
        <button type="button" class="btn btn-sm btn-outline-dark">
          Submit
        </button>
        <p className="float-right">by: Milos Rancic</p>
      </p>
    </div>
  );
};

export default Footer;
