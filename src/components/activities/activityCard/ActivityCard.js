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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo impedit accusantium deserunt, dolor dolorum.
        </Card.Text>
        <Button className="float-right p-2" variant="outline-warning" size="sm">Check it out</Button>
      </Card.Body>
    </Card>
  )
}

export default ActivityCard;