import React from "react";
import "./Home.scss";
import Carousel from 'react-bootstrap/Carousel'

// images
import carousel01 from "../../assets/images/carousel-01.jpg";
import carousel02 from "../../assets/images/carousel-02.jpg";
import carousel03 from "../../assets/images/carousel-03.jpg";
import carousel04 from "../../assets/images/carousel-04.jpg";
import carousel05 from "../../assets/images/carousel-05.jpg";

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
              <span>Awesome man</span>
            </Carousel.Item>
            <Carousel.Item>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis perferendis architecto id possimus pariatur, voluptatum dignissimos exercitationem minus, optio eveniet officiis laudantium magnam saepe ad.</p>
              <span>Customer</span>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="row">
          <div className="col-sm float-left">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae vero dignissimos tempora libero et non facilis harum iusto commodi veritatis. Sit provident, fuga fugit ut error non molestiae odio deserunt aspernatur dolorem minus totam temporibus ipsum ea quod? Nulla veritatis eos eaque itaque neque animi eius sequi molestiae! Suscipit dolor repellendus inventore incidunt corrupti, excepturi nemo odit! Magnam animi suscipit, cupiditate adipisci dolorum culpa? Autem assumenda non odio animi quaerat corporis sit maxime impedit magni</p>
          </div>
          <div className="col-sm float-right">
            <p> quis, accusantium nesciunt nulla nihil odit consequatur? Similique nihil soluta magni odio necessitatibus doloribus a quos quas, deserunt consectetur eligendi earum blanditiis recusandae incidunt doloremque perferendis vero sed cum numquam est accusantium sunt laborum nisi assumenda? Voluptatum dolorem aspernatur explicabo non cum provident soluta eveniet. Distinctio quam dignissimos aspernatur minima id at voluptatem temporibus nemo nobis debitis molestias hic quia, porro veniam ut sapiente, similique ipsa? Nihil quas minima perspiciatis dolores accusamus eligendi quo minus?</p>
          </div>
        </div>

        <div className="container social-media text-center my-5">
          <a href="#top"><i className="fab fa-2x fa-facebook-square"></i></a>
          <a href="#top"><i className="fab fa-2x fa-yelp"></i></a>
          <a href="#top"><i className="far fa-2x fa-envelope"></i></a>
        </div>

      </div>
    </>
  );
};

export default Home;