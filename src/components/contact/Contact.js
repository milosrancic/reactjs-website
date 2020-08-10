import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contact.scss";

const handleSubmit = event => {
  event.preventDefault();
  alert("Thank you for reaching out to us. We will get back to you shortly. :) ");
};

const Contact = () => {
  return (
    <div className="Contact container my-5">
      <h2>Contact us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name*</Form.Label>
          <Form.Control type="text" placeholder="Your name" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">  
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="Your email" required />
        </Form.Group>

        <Form.Group>  
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Your subject" />
        </Form.Group>

        <Form.Group >
          <Form.Label>Message*</Form.Label>
          <Form.Control as="textarea" rows="4" placeholder="Your message here..." />
         </Form.Group>

          <Button variant="outline-secondary" type="submit">
            Submit
          </Button>
      </Form>

      <div className="row adress-container text-center my-5">
        <div className="col-sm">
          <p><span>email: </span>contact@gmail.com <br />
            <span>phone: </span>+1 214-278-0973</p>
        </div>
        <div className="col-sm">
          <p>863  Fancher Drive <br /> Dallas, Texas <br /> USA
        </p>
        </div>
      </div>

    </div>
  );
};
export default Contact;
