import React from "react";
import "./Contact.css";

// AT THE BOTTOM PUT PLACEHOLDER ADRESS

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
      </form>

      <div className="adress-container text-center my-5">
        <p><span>email: </span>contact@gmail.com <br />
          <span>phone: </span>+1 214-278-0973</p>
        <p>863  Fancher Drive <br /> Dallas, Texas <br /> USA
        </p>
      </div>
    </div>
  );
};
export default Contact;
