import React from "react";
import { experiences } from "../../../data/explorePageData";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <>
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#experience"
          aria-expanded="false"
          aria-controls="experience"
        >
          Experience
        </button>
      </h2>
      <div
        id="experience"
        className="accordion-collapse collapse"
        aria-labelledby="experience"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <div className="experience-container">
            {experiences.map((experience, index) => (
              <ExperienceItem
                experience={experience}
                key={`experience-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
