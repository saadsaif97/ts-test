import React from "react";
import AddEducationForm from "../Forms/AddEducationForm";

function AddEducationModal({ errMsg, setErrMsg, getEducations }) {
  return (
    <>
      <div
        className="modal fade"
        id="addEducationModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {errMsg && <div className="alert alert-danger">{errMsg}</div>}
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                <b>Add Education</b>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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

export default AddEducationModal;
