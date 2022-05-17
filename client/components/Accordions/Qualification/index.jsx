import React, { useState } from "react";
import QualificationItem from "./QaulificationItem";

function Qualification({ setCandidates, candidates }) {
  const [qualifications, setQualifications] = useState([
    { id: 1, name: "PhD", checked: false },
    { id: 2, name: "Masters", checked: true },
    { id: 3, name: "Bachelors", checked: false },
    { id: 4, name: "Diploma", checked: false },
    { id: 5, name: "High School", checked: false },
    { id: 6, name: "Short Course", checked: false },
  ]);
  return (
    <>
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#qualification"
          aria-expanded="false"
          aria-controls="qualification"
        >
          Qualification
        </button>
      </h2>
      <div
        id="qualification"
        class="accordion-collapse collapse"
        aria-labelledby="qualification"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          {qualifications.map((qualification, index) => (
            <QualificationItem
              qualification={qualification}
              qualifications={qualifications}
              setQualifications={setQualifications}
              key={`qualification-${index}`}
              setCandidates={setCandidates}
              candidates={candidates}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Qualification;
