import React from "react";
import { FaGraduationCap } from "react-icons/fa";
function Education() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-4 offset-1">
          <div className="title">
            <div className="icon">
              <FaGraduationCap />
            </div>
            <div className="heading">
              <div className="duration">2017-2020</div>
              <div className="text">Software Engineering</div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="description">
            <div className="title">BS</div>
            <div className="text">
              PMAS arid agriculture university, Rawaslpindi
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
