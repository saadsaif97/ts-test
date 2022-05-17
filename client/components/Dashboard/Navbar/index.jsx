import React from "react";
import {
  FaBriefcase,
  FaColumns,
  FaSearch,
  FaUserAlt,
  FaUserGraduate,
} from "react-icons/fa";
import Link from "next/link";
import { BASEURL } from "../../URL/url";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            data-bs-toggle="offcanvas"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand me-auto" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex me-auto search">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserAlt />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-start dashboard bg-dark text-white side-nav fixed-top"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Sea-Vi
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav-dropdown">
            <li>
              <Link href={`${BASEURL}dashboard`}>
                <a className={`${path == "/dashboard" ? "active" : ""}`}>
                  <span className="icon">
                    <FaColumns />
                  </span>{" "}
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`${BASEURL}dashboard/profile`}>
                <a
                  className={`${path == "/dashboard/profile" ? "active" : ""}`}
                >
                  <span className="icon">
                    <FaUserAlt />
                  </span>{" "}
                  <span>Profile</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`${BASEURL}dashboard/candidate/education`}>
                <a>
                  <span className="icon">
                    <FaUserGraduate />
                  </span>{" "}
                  <span>Education</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`${BASEURL}dashboard/candidate/experience`}>
                <a>
                  <span className="icon">
                    <FaBriefcase />
                  </span>{" "}
                  <span>Experience</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
