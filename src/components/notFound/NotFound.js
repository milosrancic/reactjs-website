import React from "react";

// fix footer on this one

const NotFound = () => {
  const style = {
    margin: "200px 0 100% 0",
    letterSpacing: "1px",
    textAlign: "center"
  };

  return (
    <h4 style={style}>
      Sorry, but the page you have requested was not found.
    </h4>
  )
};

export default NotFound;
