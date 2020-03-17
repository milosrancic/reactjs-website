import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <small className="author-text">
        by: Milos Rancic{" "}
        <a
          href="https://github.com/milosrancic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
      </small>
    </div>
  );
};

export default Footer;
