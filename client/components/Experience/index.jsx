import React from "react";
import { FaBriefcase } from "react-icons/fa";
function Experience() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-4 offset-1">
          <div className="title">
            <div className="icon">
              <FaBriefcase />
            </div>
            <div className="heading">
              <div className="duration">2017-2020</div>
              <div className="text">Web Developer</div>
              <div className="text">$20000-$50000</div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="description">
            <div className="title">Infoloy</div>
            <div className="text">
              Worked as fullstack javascript web developer and developed
              different softwares depending upon the requirements Worked as
              fullstack javascript web developer and developed different.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
