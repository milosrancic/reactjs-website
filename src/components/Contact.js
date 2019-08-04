import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="container">
      {/* <p classNameName="text-left">Contact</p> */}
      <h3>Contact us</h3>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name*</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            aria-describedby="fullName"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email*</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="col">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                className="form-control"
                id="number"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>
        </div>

        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
