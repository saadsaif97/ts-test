import { FaBars, FaCaretDown } from "react-icons/fa";
import { BASEURL } from "../URL/url";
import Link from "next/link";
import { useEffect, useState } from "react";
function Navbar() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  useEffect(() => {
    if (typeof this === "window") {
      window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light client">
        <div className="container">
          <Link href={BASEURL}>
            <a className="navbar-brand">
              <img src={`${BASEURL}images/logo.png`} alt="logo" />
            </a>
          </Link>
          <div
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <div className="menu-toggler">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link href={`${BASEURL}explore`}>
                  <a className="nav-link active" aria-current="page">
                    Explore
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={`${BASEURL}user/signin`}>
                  <a className="nav-link">Sign In</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href={`${BASEURL}user/signup`}>
                  <a className="nav-link join-btn">Join</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* drawer */}

      <div
        className="offcanvas offcanvas-start client"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Sea-Vi
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul class="nav-dropdown">
            <li>
              <Link href={`${BASEURL}`}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={`${BASEURL}explore`}>
                <a>Explore</a>
              </Link>
            </li>
            <li>
              <Link href={`${BASEURL}contact-us`}>
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href={`${BASEURL}pricing`}>
                <a>Pricing</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
