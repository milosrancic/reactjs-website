import React from "react";
import "../styles/Contact.css";

const handleSubmit = event => {
  event.preventDefault();
  alert("Thank you for reaching out to us. We will get back to you shortly.");
};

const Contact = () => {
  return (
    <div className="Contact container my-5">
      <h3>Contact us</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName" className="float-left ml-2">
            Name*
          </label>
          <input
            type="text"
            className="form-control p-4 require"
            id="fullName"
            aria-describedby="fullName"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="email" className="float-left ml-2">
                Email*
              </label>
              <input
                type="email"
                className="form-control p-4"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="phone" className="float-left ml-2">
                Phone
              </label>
              <input
                type="text"
                className="form-control p-4"
                id="number"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="float-left ml-2">
            Subject
          </label>
          <input
            type="text"
            className="form-control p-4"
            id="subject"
            placeholder="Add subject"
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="float-left ml-2"
          >
            Message*
          </label>
          <textarea
            className="form-control p-3"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Your message here..."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div className="float-right newsletter-div my-5">
          <small className="text-newsletter">
            Newsletter: <br /> <input type="text" className="input-newsletter" />
          </small>
          <button
            type="button"
            className="ml-1 mt-0 btn btn-sm btn-outline-dark"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
