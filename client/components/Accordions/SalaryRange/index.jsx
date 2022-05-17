import React from "react";
import { salaries } from "../../../data/explorePageData";
import SalaryItem from "./SalaryItem";

function SalaryRange({ setCandidates, candidates }) {
  return (
    <>
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#salaryRange"
          aria-expanded="false"
          aria-controls="salaryRange"
        >
          Salary Range
        </button>
      </h2>
      <div
        id="salaryRange"
        class="accordion-collapse collapse"
        aria-labelledby="salaryRange"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div className="salary">
            {salaries.map((item, index) => (
              <SalaryItem
                item={item}
                key={`salary-${index}`}
                candidates={candidates}
                setCandidates={setCandidates}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SalaryRange;
