import React, { useEffect, useState } from "react";
import Layout from "../../../../components/Dashboard/Layout";
import axios from "axios";
import { serverURL } from "../../../../components/URL/url";
import ExperiencesTable from "../../../../components/Dashboard/Tables/ExperiencesTable";
import AddExperienceForm from "../../../../components/Dashboard/Forms/AddExperienceForm";
import DasboardTableHeading from "../../../../components/Dashboard/DasboardTableHeading";
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
      <Layout>
        <DasboardTableHeading heading="Experince" modalID="experienceModal" />
        <ExperiencesTable experiences={experiences} />
      </Layout>

      {/* <!-- Education Modal --> */}
      <div
        class="modal fade"
        id="experienceModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {errMsg && <div className="alert alert-danger">{errMsg}</div>}
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                <b>Add Experience</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <AddExperienceForm
                getExperiences={getExperiences}
                setErrMsg={setErrMsg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
