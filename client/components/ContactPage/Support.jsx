import React from "react";
import {
  FaEnvelope,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
function Support() {
  return (
    <div className="row support">
      <div className="col-12">
        <div className="contact-heading">
          <h2>Support</h2>
        </div>
        <div className="address">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <div className="text">
            Lahore High Court office: Suite 10, 5th Floor, SAF Centre, 8 Fane
            Road. Lahore.
            <br />
            Model Town Lahore Office: Chamber 1, Model Town Courts, Lahore.
          </div>
        </div>
        <div className="phone">
          <div className="icon">
            <FaPhone />
          </div>
          <div className="text">(042) 37231500</div>
        </div>
        <div className="email">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="text">johnwilliamslaw@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Support;
