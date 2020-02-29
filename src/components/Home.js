import React from "react";
import "../styles/Home.scss";
import Carousel from 'react-bootstrap/Carousel'

// images
import accomodation2 from "../images/accomodation-02.jpg";
import accomodation3 from "../images/accomodation-03.jpg"
import accomodation1 from "../images/accomodation-01.jpg"

const Home = () => {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={accomodation2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={accomodation1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={accomodation3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;