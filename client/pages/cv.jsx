import React from "react";
import {
  FaFacebookSquare,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { Layout } from "../components/Layout";
import { BASEURL } from "../components/URL/url";
import Head from "next/head";
function CV() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`${BASEURL}css/cv/cv.css`} />
      </Head>
      <Layout>
        <div className="container">
          <div className="row mt-5">
            <div className="download-resume">
              <button className="btn">
                <img src={`${BASEURL}images/pdf-icon.png`} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="container cv mt-2 mb-5">
          <div className="candidate-img">
            <img
              src={`${BASEURL}images/profiles/profile1.jpg`}
              alt="candidate"
            />
          </div>
          <div className="candidate">
            <div className="img-container"></div>
            <div className="bio">
              <div className="name">Muhammad Salman</div>
              <div className="designation">Web Developer (3+ years)</div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-7 left-side">
              <div className="education">
                <div className="cv-heading">EDUCATION</div>
                <Education />
                <Education />
                <Education />
                <Education />
              </div>
              <div className="education">
                <div className="cv-heading">EXPERIENCE</div>
                <Experience />
                <Experience />
                <Experience />
                <Experience />
              </div>
            </div>
            <div className="col-md-4 offset-1 right-side">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="contact-me">
                    <div className="heading">CONTACT ME</div>
                    <div className="contact">
                      <div className="icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="details">
                        <div className="title">Address</div>
                        <div className="description">
                          Pindora Lane1, Rawalpindi
                        </div>
                      </div>
                    </div>
                    <div className="contact">
                      <div className="icon">
                        <FaGlobe />
                      </div>
                      <div className="details">
                        <div className="title">Website</div>
                        <div className="description">
                          contactme@gmai.com profilelink.com
                        </div>
                      </div>
                    </div>

                    <div className="contact">
                      <div className="icon">
                        <FaPhoneAlt />
                      </div>
                      <div className="details">
                        <div className="title">Address</div>
                        <div className="description">
                          Pindora Lane1, Rawalpindi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="skills">
                    <div className="heading">PRO SKILLS</div>
                    <div className="skill">
                      <div className="name">Python</div>
                      <div className="weight">
                        <progress id="progress" value="32" max="100"></progress>
                      </div>
                    </div>

                    <div className="skill">
                      <div className="name">Javascript</div>
                      <div className="weight">
                        <progress id="progress" value="80" max="100"></progress>
                      </div>
                    </div>

                    <div className="skill">
                      <div className="name">Sql</div>
                      <div className="weight">
                        <progress id="progress" value="70" max="100"></progress>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-auto">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="social-links">
                    <div className="bar"></div>
                    <div className="links">
                      <div className="link">
                        <FaLinkedin />
                      </div>
                      <div className="link">
                        <FaFacebookSquare />
                      </div>
                      <div className="link">
                        <FaTwitterSquare />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CV;
