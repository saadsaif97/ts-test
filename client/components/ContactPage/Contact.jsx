import React from "react";

function Contact() {
  return (
    <form class="contact-form">
      <div className="contact-heading">
        <h2>Contact Us</h2>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name..."
            />
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email.."
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="0302XXXXXXX"
            />
          </div>
        </div>
      </div>
      <div className="col-12 mb-3">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Details"
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn contact-btn">
        Send Message
      </button>
    </form>
  );
}

export default Contact;
