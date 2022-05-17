import React from "react";
import Contact from "../components/ContactPage/Contact";

import Support from "../components/ContactPage/Support";
import { Layout } from "../components/Layout";

function ContactUs() {
  return (
    <>
      <Layout>
        <div className="custom-container mt-5 mb-5">
          <div className="main-heading mb-3">
            <h2>How can we help you?</h2>
          </div>
          <ul
            class="nav nav-pills nav-justified contact-navs"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="support-tab"
                data-bs-toggle="tab"
                data-bs-target="#support"
                type="button"
                role="tab"
                aria-controls="support"
                aria-selected="true"
              >
                Support
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active contact-container"
              id="support"
              role="tabpanel"
              aria-labelledby="support-tab"
            >
              <Support />
            </div>
            <div
              class="tab-pane fade contact-container"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row contact">
                <div className="col-12">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ContactUs;
