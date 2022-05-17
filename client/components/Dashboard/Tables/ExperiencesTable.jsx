import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function ExperiencesTable({ experiences }) {
  return (
    <table class="table table-bordered dashboard mt-3">
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">Position</th>
          <th scope="col">Company</th>
          <th scope="col">Description</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {experiences.map((experience, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{experience.position}</td>
            <td>{experience.company}</td>
            <td>{experience.job_description}</td>
            <td>{experience.from}</td>
            <td>{experience.to}</td>
            <td>
              <button className="btn btn-warning btn-sm text-white me-3">
                <FaTrashAlt />
              </button>
              <button className="btn btn-primary btn-sm text-white">
                <FaEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExperiencesTable;
