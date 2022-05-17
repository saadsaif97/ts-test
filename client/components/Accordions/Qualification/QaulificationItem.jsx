import axios from "axios";
import React, { useState } from "react";
import { serverURL } from "../../URL/url";

function QualificationItem({
  qualification,
  qualifications,
  setQualifications,
  setCandidates,
  candidates,
}) {
  const [queryData, setQueryData] = useState([]);
  const handleQualificationChange = (id) => {
    console.log(qualifications);
    const updatedQualifications = qualifications.map((currentQualification) => {
      if (currentQualification.id === id) {
        return {
          ...currentQualification,
          checked: !currentQualification.checked,
        };
      }
      return currentQualification;
    });
    setQualifications(updatedQualifications);
    const checkedQualifications = updatedQualifications.filter(
      (item) => item.checked === true
    );
    console.log(checkedQualifications);
    const qualificationArr = [];
    checkedQualifications.forEach((element) => {
      qualificationArr.push(element.name.toLowerCase());
    });

    const getCandidates = async () => {
      try {
        const { data } = await axios.post(
          `${serverURL}api/candidates/qualification`,
          { qualification: qualificationArr },
          {
            withCredentials: true,
          }
        );
        console.log(data);
        setCandidates(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    console.log(qualificationArr.length);
    if (qualificationArr.length > 0) {
      getCandidates();
    }
  };
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value={qualification.name}
        id="flexCheckDefault"
        onChange={() => handleQualificationChange(qualification.id)}
        checked={qualification.checked}
      />
      <label class="form-check-label" for="flexCheckDefault">
        {qualification.name}
      </label>
    </div>
  );
}

export default QualificationItem;
