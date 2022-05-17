import React from "react";

function SocialAccounts() {
  return (
    <>
      <div className="social-accounts">
        <div className="heading">
          <h5>
            <b>Social Accounts</b>
          </h5>
          <div className="link-btn">
            <span>Add Accounts</span>
          </div>
        </div>
        <ul className="social-accounts-list">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Gmail</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Google</a>
          </li>
          <li>
            <a href="">Dribble</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialAccounts;
