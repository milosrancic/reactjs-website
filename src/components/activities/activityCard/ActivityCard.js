import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ActivityCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Lorem ipsum sit dolor lorem sit, amet consectetur adipisicing sit
          elit. Ratione nem impedit accusantium deserunt, dolor dolorum dolor
          lorem ipsum.
        </Card.Text>
        <Button
          className="float-right p-1 activity-btn"
          variant="outline-danger"
          size="sm"
        >
          Check it out
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ActivityCard;
