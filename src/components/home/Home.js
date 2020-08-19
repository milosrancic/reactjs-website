import React from "react";
import "./Home.scss";
import Carousel from 'react-bootstrap/Carousel'

import carousel01 from "../../assets/images/carousel-01.jpg";
import carousel02 from "../../assets/images/carousel-02.jpg";
import carousel03 from "../../assets/images/carousel-03.jpg";
import carousel04 from "../../assets/images/carousel-04.jpg";
import carousel05 from "../../assets/images/carousel-05.jpg";

const Home = () => {
  return (
    <div className="Home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel01})` }}
            alt=""
          />
          <Carousel.Caption>
            <h4>Experience this sunrise</h4>
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
            <h4>Breathe in, breathe out</h4>
            <p>Right next to the hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ backgroundImage: `url(${carousel03})` }}
            alt=""
          />
          <Carousel.Caption>
            <h4>Enjoy the view</h4>
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
            <h4>Rafting</h4>
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
            <h4>Absorb everything</h4>
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
              <span>Awesome woman</span>
            </Carousel.Item>
            <Carousel.Item>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis perferendis architecto id possimus pariatur, voluptatum dignissimos exercitationem minus, optio eveniet officiis laudantium magnam saepe ad.</p>
              <span>Customer</span>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="row">
          <div className="col-sm float-left">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae fuga unde, dicta totam minus rem, autem repudiandae sed at aliquid praesentium molestias! Laborum modi voluptate vero fugit natus, accusantium iusto? Eveniet ut incidunt, tempora optio fugit ullam dolorem voluptatum repellendus iusto minima? Nesciunt odio autem fugit hic vero suscipit quos, labore totam eum? Hic, autem molestias eaque cum vel iste maiores aliquam dolorem natus libero? Eius, facilis beatae est provident officia ducimus esse? Illum maiores veniam aperiam dolor aliquam molestiae quis neque necessitatibus distinctio?</p>
          </div>
          <div className="col-sm float-right">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae ipsum deleniti, laborum labore obcaecati impedit nisi consectetur beatae inventore commodi neque praesentium, repellat, modi nihil ut repellendus esse voluptates? Alias dolore necessitatibus veniam maxime. Quaerat eum odit aliquam nesciunt sed cupiditate voluptatem aut. A odio fuga alias illum nemo explicabo, repudiandae quas maiores rerum aliquam vel dolor fugit repellat assumenda quod accusantium aliquid quidem optio voluptate! Sunt, eum quaerat.</p>
          </div>
        </div>

        <div className="container social-media text-center my-5">
          <a href="#top"><i className="fab fa-2x fa-facebook-square"></i></a>
          <a href="#top"><i className="fab fa-2x fa-yelp"></i></a>
          <a href="#top"><i className="far fa-2x fa-envelope"></i></a>
        </div>

      </div>
    </div>
  );
};

export default Home;