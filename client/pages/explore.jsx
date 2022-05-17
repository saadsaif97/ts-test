import React, { useEffect, useState } from "react";
import Experience from "../components/Accordions/Experience";
import Location from "../components/Accordions/Location";
import Occupation from "../components/Accordions/Occupation";
import Qualification from "../components/Accordions/Qualification";
import SalaryRange from "../components/Accordions/SalaryRange";
import axios from "axios";
import SearchBar from "../components/Search Bar";
import { BASEURL, serverURL } from "../components/URL/url";
import Candidate from "../components/Explore/Candidate";
import { Layout } from "../components/Layout";
import Head from "next/head";

function Explore() {
  const [candidates, setCandidates] = useState([]);
  const getCandidates = async () => {
    try {
      const { data } = await axios.get(`${serverURL}api/candidates`);
      setCandidates(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getCandidates();
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`${BASEURL}css/explore/explore.css`} />
      </Head>
      <Layout>
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <SearchBar home={false} setCandidates={setCandidates} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 filters">
              <h3>Filters</h3>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <Location />
                </div>
                <div className="accordion-item">
                  <Qualification
                    setCandidates={setCandidates}
                    candidates={candidates}
                  />
                </div>
                <div className="accordion-item">
                  <Experience />
                </div>
                <div className="accordion-item">
                  <SalaryRange
                    setCandidates={setCandidates}
                    candidates={candidates}
                  />
                </div>
                <div className="accordion-item">
                  <Occupation setCandidates={setCandidates} />
                </div>
              </div>
            </div>
            <div className="col-md-9 profiles">
              {/* <ProfileItem light={true} /> */}
              {candidates.map((candidate) => (
                <Candidate light={false} candidate={candidate} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Explore;
