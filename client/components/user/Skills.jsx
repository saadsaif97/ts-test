import React from "react";

function Skills() {
  return (
    <>
      <div className="skills">
        <div className="heading">
          <h5>
            <b>Skills</b>
          </h5>
          <div className="link-btn">
            <span>Add Skills</span>
          </div>
        </div>
        <ul className="skills-list">
          <li className="skills-bubble-item">
            <span>Web Development</span>
          </li>
          <li className="skills-bubble-item">
            <span>Web Design</span>
          </li>
          <li className="skills-bubble-item">
            <span>Webpage Design</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
