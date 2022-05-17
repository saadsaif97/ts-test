import React, { useEffect, useState } from "react";
import Layout from "../../../../components/Dashboard/Layout";
import axios from "axios";
import { serverURL } from "../../../../components/URL/url";
import AddEducationForm from "../../../../components/Dashboard/Forms/AddEducationForm";
import EducationsTable from "../../../../components/Dashboard/Tables/EducationsTable";
import DasboardTableHeading from "../../../../components/Dashboard/DasboardTableHeading";

function Education() {
  const [educations, setEducations] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const getEducations = async () => {
    try {
      const { data } = await axios.get(`${serverURL}api/candidate/education/`, {
        withCredentials: true,
      });
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
      <Layout>
        <DasboardTableHeading heading="Education" modalID="educationModal" />
        <EducationsTable educations={educations} />
      </Layout>

      {/* <!-- Education Modal --> */}
      <div
        class="modal fade"
        id="educationModal"
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
                <b>Add Education</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <AddEducationForm
                getEducations={getEducations}
                setErrMsg={setErrMsg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
