import axios from "axios";
import React, { useState } from "react";
import { serverURL } from "../../URL/url";

const initialState = {
  min: "",
  max: "",
};
function SalaryItem({ item, setCandidates }) {
  const handleSalaryChange = async (e) => {
    const salaryRange = e.target.value;
    let salary;
    switch (salaryRange) {
      case "40000-0":
        salary = { min: "0", max: "40000" };
        break;
      case "50000-40000":
        salary = { min: "40000", max: "50000" };
        break;
      case "60000-50000":
        salary = { min: "50000", max: "60000" };
        break;
      case "70000-60000":
        salary = { min: "60000", max: "70000" };
        break;
      case "80000-70000":
        salary = { min: "70000", max: "80000" };
        break;
      case "90000-80000":
        salary = { min: "80000", max: "90000" };
        break;
      case "100000-90000":
        salary = { min: "90000", max: "100000" };
        break;
      case "100000+":
        salary = { min: "100000+", max: "" };
        break;
    }
    console.log(salary);
    try {
      const { data } = await axios.post(
        `${serverURL}api/candidates/salary`,
        { salary },
        {
          withCredentials: true,
        }
      );
      setCandidates(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div class="form-check">
      <input
        className="form-check-input"
        type="radio"
        id="flexCheckDefault"
        name="salary-range"
        value={item}
        onChange={handleSalaryChange}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        ${item}
      </label>
    </div>
  );
}

export default SalaryItem;
