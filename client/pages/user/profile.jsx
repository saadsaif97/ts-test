import React from "react";
import { Layout } from "../../components/Layout";
import { BASEURL } from "../../components/URL/url";
import Head from "next/head";
import Info from "../../components/user/Info";
import Education from "../../components/user/Education";
import Experience from "../../components/user/Experience";
function Profile() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`${BASEURL}css/user/profile.css`} />
      </Head>
      <Layout>
        <div className="container user">
          <div className="row">
            <div className="col-md-4 offset-1">
              <Info />
            </div>
            <div className="col-md-6">
              <Education />
              <Experience />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
