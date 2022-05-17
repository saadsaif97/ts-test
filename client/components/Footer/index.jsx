import React from "react";
import { BASEURL } from "../URL/url";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div class="row pt-5 pb-5">
          <div class="col-md-3">
            <div class="section1">
              <div class="logo">
                <img src={`${BASEURL}images/logo2.png`} alt="logo" />
              </div>
              <div class="copyright">Copyright 2021 42 Degrees</div>
            </div>
          </div>
          <div class="col-md-3">
            <ul class="navigation">
              <h5>Navigate</h5>
              <li>
                <Link href={BASEURL}>
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
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="navigation">
              <h5>Resource</h5>

              <li>
                <Link href={`${BASEURL}terms-of-use`}>
                  <a>Terms of use</a>
                </Link>
              </li>
              <li>
                <Link href={`${BASEURL}privacy-policy`}>
                  <a>Privacy policy</a>
                </Link>
              </li>
              <li>
                <Link href={`${BASEURL}pricing`}>
                  <a>Pricing</a>
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="address">
              <h5>Address</h5>
              <p>
                Calle Nitrogeno 8 <br />
                47012 Valladolid, Spain
              </p>
            </div>
            <div class="social-links">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="company-link">
            <h5>
              Power By <a href="https://infologysolutions.com/">insol</a>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
