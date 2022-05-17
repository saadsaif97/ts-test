import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import AddEducationModal from "../Modals/AddEducationModal";
import { serverURL } from "../URL/url";
function Education() {
  const [educations, setEducations] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const getEducations = async () => {
    try {
      const { data } = await axios.get(`${serverURL}api/candidate/education/`, {
        withCredentials: true,
      });
      console.log(data);
      setEducations(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getEducations();
  }, []);
  return (
    <>
      <div className="education-section">
        <div className="education-title">
          <span>Education</span>
          <button
            className="profile-addBtn"
            data-bs-toggle="modal"
            data-bs-target="#addEducationModal"
          >
            <FaPlus />
          </button>
        </div>
        {educations.map((education) => {
          const f = new Date(education.from);
          const from = f.getFullYear();
          const t = new Date(education.to);
          const to = t.getFullYear();
          return (
            <div className="education">
              <div className="institute">
                <h6>
                  <b>{education.institute}</b>
                </h6>
                <button className="profile-editBtn">
                  <FaEdit />
                </button>
              </div>
              <div className="field-of-study">{`${education.field_of_study},${education.qualification}`}</div>
              <div className="duration">{`${from} - ${to}`}</div>
            </div>
          );
        })}
      </div>
      <AddEducationModal
        getEducations={getEducations}
        setErrMsg={setErrMsg}
        errMsg={errMsg}
      />
    </>
  );
}

export default Education;
