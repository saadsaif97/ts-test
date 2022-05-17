import React from "react";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
function DasboardTableHeading({ heading, modalID }) {
  return (
    <div className="heading dashboard">
      <h4>
        <b>{heading}</b>
      </h4>
      <Link href="">
        <a
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target={`#${modalID}`}
        >
          <FaPlus />
        </a>
      </Link>
    </div>
  );
}

export default DasboardTableHeading;
