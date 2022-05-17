import React from "react";
import { useForm } from "react-hook-form";
function CreateUserInfoForm({ setUserInfo, nextStep }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    setUserInfo(formData);
    nextStep();
  };
  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
          <label htmlFor="occupation" class="form-label">
            Occupation
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g Web Developer"
            {...register("occupation", { required: true })}
          />
          <div>
            {errors.occupation && (
              <div className="alert alert-danger">Occupation is required</div>
            )}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="about" class="form-label">
            About
          </label>
          <textarea
            className="form-control"
            id="about"
            cols="30"
            rows="10"
            {...register("about", { required: true })}
          ></textarea>
          <div>
            {errors.about && (
              <div className="alert alert-danger">About is required</div>
            )}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="salary" class="form-label">
            Salary Demand
          </label>
          <input
            type="number"
            className="form-control"
            {...register("salary", { required: true })}
          />
          <div>
            {errors.salary && (
              <div className="alert alert-danger">Salary is required</div>
            )}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="image" class="form-label">
            Profile Image
          </label>
          <input
            type="file"
            className="form-control"
            {...register("img", { required: true })}
          />
          <div>
            {errors.img && (
              <div className="alert alert-danger">
                Profile Image is required
              </div>
            )}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="dob" class="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            {...register("dob", { required: true })}
          />
          <div>
            {errors.dob && (
              <div className="alert alert-danger">
                Date of Birth is required
              </div>
            )}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="contact" class="form-label">
            Contact#
          </label>
          <input
            type="number"
            className="form-control"
            {...register("contact", { required: true })}
          />
          <div>
            {errors.contact && (
              <div className="alert alert-danger">Contact# is required</div>
            )}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="address" class="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            {...register("address", { required: true })}
          />
          <div>
            {errors.address && (
              <div className="alert alert-danger">Address is required</div>
            )}
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Continue
        </button>
      </form>
    </>
  );
}

export default CreateUserInfoForm;
