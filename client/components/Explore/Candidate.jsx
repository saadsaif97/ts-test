import React from "react";
import { BASEURL } from "../URL/url";
import {
  FaBriefcase,
  FaGraduationCap,
  FaHandHoldingUsd,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";
function Candidate({ light, candidate }) {
  return (
    <div className={`profile mb-2 ${light ? "profile-light" : ""}`}>
      <div className="favourite">
        <FaRegHeart />
      </div>
      <div className="row">
        <div className="col-md-2">
          <div className="img">
            <img src={`${BASEURL}images/profiles/${candidate.image}`} alt="" />
          </div>
        </div>
        <div className="col-md-10">
          <div className="description">
            <div className="bio">
              <div className="name">{candidate.name}</div>
              <div className="designation">{candidate.occupation}</div>
            </div>
            <div className="location">Pakistan</div>
            <div className="footer">
              <div className="rating">
                <FaStar />
                &nbsp; 5.0
              </div>
              <div className="salary-range">
                <FaHandHoldingUsd />
                &nbsp; ${candidate.salary}
              </div>
              <div className="experience">
                <FaBriefcase />
                &nbsp; 3+ years
              </div>
              <div className="qualification">
                <FaGraduationCap />
                &nbsp;{candidate.qualification}
              </div>
              <div className="view-profile">
                <Link href={`${BASEURL}profile`}>
                  <a>View Profile</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
