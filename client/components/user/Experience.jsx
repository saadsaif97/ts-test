import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import AddExperienceModal from "../Modals/AddExperienceModal";
import { serverURL } from "../URL/url";
function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const getExperiences = async () => {
    try {
      const { data } = await axios.get(
        `${serverURL}api/candidate/experience/`,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setExperiences(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getExperiences();
  }, []);
  return (
    <>
      <div className="experience-section">
        <div className="experience-title">
          <span>Experience</span>
          <button
            className="profile-addBtn"
            data-bs-toggle="modal"
            data-bs-target="#addExperienceModal"
          >
            <FaPlus />
          </button>
        </div>
        {experiences.map((experience) => {
          const f = new Date(experience.from);
          const from = f.getFullYear();
          const t = new Date(experience.to);
          const to = t.getFullYear();
          return (
            <div className="profile-experience">
              <div className="company">
                <h6>
                  <b>{experience.company}</b>
                </h6>
                <button className="profile-editBtn">
                  <FaEdit />
                </button>
              </div>
              <div className="position">{experience.position}</div>
              <div className="duration">{`${from} - ${to}`}</div>
              <div className="job-description">
                {experience.job_description}
              </div>
            </div>
          );
        })}
      </div>
      <AddExperienceModal
        setErrMsg={setErrMsg}
        errMsg={errMsg}
        getExperiences={getExperiences}
      />
    </>
  );
}

export default Experience;
