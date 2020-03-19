import React from "react";

import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

const ActivityCard = props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      {/* <Button>Check it out</Button> */}
    </Card>
  )
}

export default ActivityCard;