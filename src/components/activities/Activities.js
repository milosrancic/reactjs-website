import React from "react";
import "../../styles/Activities.css";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// images
import activities01 from "../../images/activities-01.jpeg";
import activities02 from "../../images/activities-02.jpeg";
import activities03 from "../../images/activities-03.jpeg";
import activities04 from "../../images/activities-04.jpeg";

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
          <Card.Img variant="top" src={activities03} />
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
          <Card.Img variant="top" src={activities04} />
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
