import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { serverURL } from "../URL/url";
import Router from "next/router";
import axios from "axios";
function SignUpForm() {
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${serverURL}api/auth/signup`,
        formData,
        { withCredentials: true }
      );
      Router.push("/");
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
    <div className="signup-form">
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign up</h2>
        <p>Please fill in this form to create an account!</p>
        {errMsg && <div className="alert alert-danger">{errMsg}</div>}

        <hr />
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              <div>
                {errors.firstName && (
                  <div className="alert alert-danger">
                    First name is required
                  </div>
                )}
              </div>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              <div>
                {errors.lastName && (
                  <div className="alert alert-danger">
                    Last name is required
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <div>
            {errors.email && (
              <div className="alert alert-danger">Email is required</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <select class="form-select" {...register("role", { required: true })}>
            <option selected disabled value="">
              Select role
            </option>
            <option value="0">Candidate</option>
            <option value="1">Employer</option>
          </select>
          <div>
            {errors.role && (
              <div className="alert alert-danger">Role is required</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <div>
            {errors.password && (
              <div className="alert alert-danger">Password is required</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="confirm_password"
            placeholder="Confirm Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <label className="form-check-label">
            <input type="checkbox" /> I accept the <a href="#">Terms of Use</a>{" "}
            &amp; <a href="#">Privacy Policy</a>
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
        <div className="hint-text">
          Already have an account?{" "}
          <Link href="/user/signin">
            <a>Sign in here</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
