import React from "react";
import "../styles/Activities.css";
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// images
import carousel01 from "../images/carousel-01.jpg";
import carousel02 from "../images/carousel-02.jpg";
import activities01 from "../images/activities-01.jpeg";
import activities02 from "../images/activities-02.jpeg";
import carousel05 from "../images/carousel-05.jpg";

const Activities = () => {
  return (
    <div id="activities" className="container">
      <h3>Things to do </h3>

      <CardDeck>
        <Card>
          <Card.Img variant="top" src={activities02} />
          <Card.Body>
            <Card.Title>Hiking</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={activities01} />
          <Card.Body>
            <Card.Title>Horseback riding</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <CardDeck className="mt-5">
        <Card>
          <Card.Img variant="top" src={carousel01} />
          <Card.Body>
            <Card.Title>Rafting</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={carousel02} />
          <Card.Body>
            <Card.Title>Camp Firing </Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};
export default Activities;
