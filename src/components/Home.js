import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div id="home" className="container">
      {/* <p className="text-left">Home</p> */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
