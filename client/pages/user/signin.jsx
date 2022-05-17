import React from "react";
import SignInForm from "../../components/Forms/SignInForm";
import { Layout } from "../../components/Layout";

function SignIn() {
  return (
    <Layout>
      <div className="auth-page">
        <SignInForm />
      </div>
    </Layout>
  );
}

export default SignIn;
