import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { serverURL } from "../URL/url";
function SearchBar({ home, setCandidates }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${serverURL}api/candidates/search?term=${searchQuery}`,
        null,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setCandidates(data);
    } catch (error) {
      console.log(error.response);
    }
    setSearchQuery("");
  };
  return (
    <form
      method="post"
      className={`search-bar ${home ? "home-search" : ""}`}
      onSubmit={handleSearchSubmit}
    >
      <div class={`input-group mb-3 ${home ? "" : "explore-search"}`}>
        <span class="input-group-text">
          <FaSearch />
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder='try "building mobile app"'
          onChange={handleSearchChange}
        />
        <button class="btn" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
