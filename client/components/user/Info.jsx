import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import SocialAccounts from "./SocialAccounts";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { BASEURL, serverURL } from "../URL/url";
import axios from "axios";
function Info() {
  const [candidate, setCandidate] = useState({});
  const c = new Date(candidate?.created_at);
  const since = c.getFullYear();
  const d = new Date(candidate?.dob);
  const dob = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  const [errMsg, setErrMsg] = useState("");
  const getInfo = async () => {
    try {
      const { data } = await axios.get(`${serverURL}api/candidate/`, {
        withCredentials: true,
      });
      setCandidate(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <div className="profile">
        <div className="bio">
          <div className="img">
            <img src={`${BASEURL}images/profiles/${candidate?.image}`} alt="" />
          </div>
          <div className="name">
            <h4>
              <b>Muhammad Salman</b>
            </h4>
          </div>
          <div className="occupation">
            <b>{candidate?.occupation}</b>
          </div>
        </div>
        <div className="stats">
          <div className="location">
            <div className="icon">
              <FaUserAlt /> <span>From</span>
            </div>
            <div className="text">{candidate?.address}</div>
          </div>
          <div className="member-since">
            <div className="icon">
              <FaMapMarkerAlt /> <span>Since</span>
            </div>
            <div className="text">{since}</div>
          </div>
          <div className="dob">
            <div className="icon">
              <FaMapMarkerAlt /> <span>DOB</span>
            </div>
            <div className="text">{dob}</div>
          </div>
          <div className="about">
            <div className="heading">
              <h5>
                <b>About</b>
              </h5>
            </div>
            <p>{candidate?.about}</p>
            <div className="profile-bottom">
              <button className="btn btn-sm edit-profile-btn">
                Edit Profile
              </button>
            </div>
          </div>

          <SocialAccounts />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default Info;
