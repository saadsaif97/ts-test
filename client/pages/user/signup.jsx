import React from "react";
import SignUpForm from "../../components/Forms/SignUpForm";
import { Layout } from "../../components/Layout";

function signup() {
  return (
    <Layout>
      <div className="auth-page">
        <SignUpForm />
      </div>
    </Layout>
  );
}

export default signup;
