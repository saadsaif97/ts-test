import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { BASEURL } from "../../components/URL/url";
import Head from "next/head";
import { useForm } from "react-hook-form";
import CreateUserInfoForm from "../../components/Create Profile/CreateUserInfoForm";
import CreateEducationForm from "../../components/Create Profile/CreateEducationForm";
function CreateProfile() {
  const [formStep, setFormStep] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [education, setEducation] = useState({});
  console.log(userInfo);
  const nextStep = () => {
    setFormStep((prevState) => prevState + 1);
  };
  const prevStep = () => {
    setFormStep((prevState) => prevState - 1);
  };
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`${BASEURL}css/user/create-profile.css`} />
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-3">
              {formStep === 1 && (
                <CreateUserInfoForm
                  nextStep={nextStep}
                  setUserInfo={setUserInfo}
                />
              )}

              {formStep === 2 && (
                <CreateEducationForm
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setEducation={setEducation}
                />
              )}
              {formStep === 3 && "Congratulations"}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CreateProfile;
