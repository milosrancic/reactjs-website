import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="container">
      {/* <p classNameName="text-left">Contact</p> */}
      <h3>Contact us</h3>
      <form>
        <div className="form-group">
          <label htmlFor="fullName" className="float-left ml-2">
            Full Name*
          </label>
          <input
            type="text"
            className="form-control p-4"
            id="fullName"
            aria-describedby="fullName"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="email" className="float-left ml-2">
                Email*
              </label>
              <input
                type="text"
                className="form-control p-4"
                id="email"
                placeholder="Enter Your Email"
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
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label
            className="my-1 mr-2 float-left ml-2"
            htmlFor="inlineFormCustomSelectPref"
          >
            Needed Services*
          </label>
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
          >
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="form-group">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="float-left ml-2"
          >
            Message
          </label>
          <textarea
            className="form-control p-3"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message here..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
