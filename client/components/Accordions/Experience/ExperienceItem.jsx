import React from "react";

function ExperienceItem({ experience }) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value={experience}
        id="flexCheckDefault"
      />
      <label class="form-check-label" htmlFor="flexCheckDefault">
        {experience} years
      </label>
    </div>
  );
}

export default ExperienceItem;
