import React from "react";
import { Layout } from "../components/Layout";

function Pricing() {
  return (
    <>
      <Layout>
        <div className="container mt-5 mb-5 pricing">
          <div className="main-heading mb-3">
            <h2>Pricing</h2>
          </div>
          <div class="row row-cols-1 row-cols-md-3 text-center">
            <div class="col-md-3 offset-3">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Get Listed</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $0<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg">
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Ads/Featured</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $15<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Pricing;
