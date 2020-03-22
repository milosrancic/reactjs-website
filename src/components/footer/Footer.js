import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <i className="fas fa-code"></i>
      {" "}by {" "}
      <a
        href="https://github.com/milosrancic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default Footer;
