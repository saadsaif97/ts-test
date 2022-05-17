import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function EducationsTable({ educations }) {
  return (
    <table class="table table-bordered dashboard mt-3">
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">Institute</th>
          <th scope="col">Qualification</th>
          <th scope="col">Filed of Study</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {educations.map((education, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{education.institute}</td>
            <td>{education.qualification}</td>
            <td>{education.field_of_study}</td>
            <td>{education.from}</td>
            <td>{education.to}</td>
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

export default EducationsTable;
