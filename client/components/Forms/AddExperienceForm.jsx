import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { serverURL } from "../URL/url";
function AddExperienceForm({ getExperiences, setErrMsg }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${serverURL}api/candidate/experience/`,
        formData,
        { withCredentials: true }
      );
      getExperiences();
    } catch (error) {
      console.log(error.response);
      if (error.response.status == 401) {
        setErrMsg(error.response.data);
      }
      if (error.response.status == 400) {
        setErrMsg(error.response.data);
      }
      if (error.response.status == 500) {
        setErrMsg(error.response.data);
      }
    }
  };
  return (
    <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label htmlFor="position" class="form-label">
          Position
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Web Developer"
          {...register("position", { required: true })}
        />
        <div>
          {errors.position && (
            <div className="alert alert-danger">Position is required</div>
          )}
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="company" class="form-label">
          Company
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Infology Solutions"
          {...register("company", { required: true })}
        />
        <div>
          {errors.company && (
            <div className="alert alert-danger">Company is required</div>
          )}
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="job_description" class="form-label">
          Job Description
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g worked as web developer"
          {...register("job_description", { required: true })}
        />
        <div>
          {errors.job_description && (
            <div className="alert alert-danger">
              Job Decsription is required
            </div>
          )}
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="from" class="form-label">
          From
        </label>
        <input
          type="date"
          className="form-control"
          {...register("from", { required: true })}
        />
        <div>
          {errors.from && (
            <div className="alert alert-danger">From is required</div>
          )}
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="to" class="form-label">
          To
        </label>
        <input
          type="date"
          className="form-control"
          {...register("to", { required: true })}
        />
        <div>
          {errors.to && (
            <div className="alert alert-danger">To is required</div>
          )}
        </div>
      </div>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Cancel
      </button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
        Create
      </button>
    </form>
  );
}

export default AddExperienceForm;
