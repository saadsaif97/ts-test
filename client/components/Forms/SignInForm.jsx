import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { serverURL } from "../URL/url";
import Router from "next/router";
import axios from "axios";

function SignInForm() {
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
        `${serverURL}api/auth/signin`,
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
    <div className="signup-form signin-form">
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign in</h2>
        <p>Please fill in this form to Sign in!</p>
        {errMsg && <div className="alert alert-danger">{errMsg}</div>}
        <hr />
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
          <button type="submit" className="btn btn-primary btn-lg">
            Sign in
          </button>
        </div>
        <div className="hint-text">
          Don't have an account?{" "}
          <Link href="/user/signup">
            <a>Sign up here</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
