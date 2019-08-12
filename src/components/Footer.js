import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="container" id="footer">
      <p className="container fixed-bottom">
        Newsletter: _____{" "}
        <button type="button" class="btn btn-sm btn-light">
          Submit
        </button>
      </p>
    </div>
  );
};

export default Footer;
