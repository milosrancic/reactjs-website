import React from "react";
import "../styles/Home.scss";
import Carousel from 'react-bootstrap/Carousel'

// images
import carousel01 from "../images/carousel-01.jpg";
import carousel02 from "../images/carousel-02.jpg";
import carousel03 from "../images/carousel-03.jpg";
import carousel04 from "../images/carousel-04.jpg";
import carousel05 from "../images/carousel-05.jpg";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Hotel name </h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel01})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Experience this sunrise</h3>
            <p>Just a 30 minute walk from hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ backgroundImage: `url(${carousel02})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Breathe in, breathe out</h3>
            <p>Right next to hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel03})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Enjoy the view</h3>
            <p>Bench, hot coffee and silence.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ backgroundImage: `url(${carousel04})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Rafting</h3>
            <p>An hour drive from hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel05})` }}
            alt=""
          />
          <Carousel.Caption>
            <h3>Absorb everything</h3>
            <p>After two hours of climbing, this is the prize.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container my-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, totam voluptatum, alias iste eius similique praesentium iusto odit ratione facilis accusamus aspernatur impedit modi laudantium sit optio odio fugiat temporibus consectetur. Quam incidunt sequi soluta excepturi itaque ex, dignissimos repellat? Quisquam, rem sapiente! Doloribus delectus dolorem fugiat provident ullam quae aspernatur eligendi cupiditate at ea autem officiis tenetur esse, dolorum, repudiandae minima ducimus eveniet quo itaque. Quam odio magnam, eveniet incidunt tenetur dolores enim rem nostrum fugiat dignissimos hic ex placeat vitae! Nemo nulla earum vitae, rem iste mollitia, magnam itaque a ab repellat minus quos ipsum est, voluptates aperiam!</p>
        <div className="testimonials container">
          <h3>Testimonials</h3>
          <Carousel
            controls={false}
            interval={4000}
            keyboard={false}
          >
            <Carousel.Item>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum doloribus temporibus placeat nostrum tempora labore dolor aspernatur eos, autem tenetur, inventore ullam? Non, provident cumque! Corrupti inventore suscipit neque quaerat!</p>
              <span>CEO of the company</span>
            </Carousel.Item>
            <Carousel.Item>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis placeat aliquam repellat deleniti, odit culpa voluptatibus sint sunt, iusto, fuga nulla tenetur atque ratione. Obcaecati nulla velit accusamus, iste id adipisci blanditiis.</p>
              <span>Awesome man</span>
            </Carousel.Item>
            <Carousel.Item>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis perferendis architecto id possimus pariatur, voluptatum dignissimos exercitationem minus, optio eveniet officiis laudantium magnam saepe ad.</p>
              <span>Customer</span>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="container">
          {/* social media icons, placeholder adress */}
        </div>
      </div>
    </>
  );
};

export default Home;