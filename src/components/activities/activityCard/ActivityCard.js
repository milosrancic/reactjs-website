import React from "react";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ActivityCard = props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button className="float-right" variant="outline-secondary" size="sm">Check it out</Button>
      </Card.Body>
    </Card>
  )
}

export default ActivityCard;