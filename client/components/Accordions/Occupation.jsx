import axios from "axios";
import React, { useState } from "react";
import { serverURL } from "../URL/url";

function Occupation({ setCandidates }) {
  const [occupation, setOccupation] = useState("");
  const handleOccuptionChange = (e) => {
    setOccupation(e.target.value);
  };
  const handleOccupationSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${serverURL}api/candidates/occupation`,
        { occupation },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setCandidates(data);
    } catch (error) {
      console.log(error.response);
    }
    setOccupation("");
  };
  return (
    <>
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#occupation"
          aria-expanded="false"
          aria-controls="occupation"
        >
          Occupation
        </button>
      </h2>
      <div
        id="occupation"
        class="accordion-collapse collapse"
        aria-labelledby="occupation"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div className="occupation-container">
            <form onSubmit={handleOccupationSubmit}>
              <input
                type="text"
                id="occupation"
                name="occupation"
                placeholder="search occupation..."
                onChange={handleOccuptionChange}
                value={occupation}
              />
              <button type="submit">Apply</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Occupation;
