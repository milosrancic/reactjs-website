import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.scss";

const handleSubmit = (event) => {
  event.preventDefault();
  alert(
    "Thank you for reaching out to us. We will get back to you shortly. :) "
  );
};

const Contact = () => {
  return (
    <div className="Contact container my-5">
      <h2>Contact us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name *</Form.Label>
          <Form.Control type="text" placeholder="John" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email *</Form.Label>
          <Form.Control type="email" placeholder="John@john.com" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Room availability" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Message *</Form.Label>
          <Form.Control as="textarea" rows="4" placeholder="Hey, how are ..." />
        </Form.Group>

        <Button
          variant="outline-danger"
          type="submit"
          className="contact-btn"
          size="sm"
        >
          Submit
        </Button>
      </Form>

      <div className="row adress-container text-center my-5">
        <div className="col-sm">
          <p>
            <span>email: </span>contact@gmail.com <br />
            <span>phone: </span>+1 214-278-0973
          </p>
        </div>
        <div className="col-sm">
          <p>
            863 Fancher Drive <br /> Dallas, Texas <br /> USA
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
