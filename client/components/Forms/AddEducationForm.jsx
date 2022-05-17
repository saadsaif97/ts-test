import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { serverURL } from "../URL/url";
function AddEducationForm({ getEducations, setErrMsg }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${serverURL}api/candidate/education/`,
        formData,
        { withCredentials: true }
      );
      getEducations();
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
        <label htmlFor="institute" class="form-label">
          Institute
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Comsats university,Islamabad"
          {...register("institute", { required: true })}
        />
        <div>
          {errors.institute && (
            <div className="alert alert-danger">Institute is required</div>
          )}
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="qualification" class="form-label">
          Qualification
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          {...register("qualification", { required: true })}
        >
          <option selected disabled>
            Select Qualification
          </option>
          <option value="phd">PhD</option>
          <option value="masters">Masters</option>
          <option value="bachelors">Bachelors</option>
          <option value="diploma">Diploma</option>
          <option value="high school">High School</option>
          <option value="short course">Short Course</option>
        </select>
        <div>
          {errors.qualification && (
            <div className="alert alert-danger">Qualification is required</div>
          )}
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field_of_study" class="form-label">
          Field Of Study
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Software Engineering"
          {...register("field_of_study", { required: true })}
        />
        <div>
          {errors.field_of_study && (
            <div className="alert alert-danger">Field Of Study is required</div>
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

export default AddEducationForm;
