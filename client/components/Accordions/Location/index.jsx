import React from "react";

function Location() {
  return (
    <>
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#location"
          aria-expanded="false"
          aria-controls="location"
        >
          Location
        </button>
      </h2>
      <div
        id="location"
        class="accordion-collapse collapse"
        aria-labelledby="location"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div className="location-container">
            <form>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="search area..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
