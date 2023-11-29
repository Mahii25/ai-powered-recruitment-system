import React from "react";

const JobSection = ({ job }) => {
  const { name, jobType, skills } = job;
  return (
    <div className="card w-100 mb-3">
      <div className="card-body d-sm-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{name}</h5>
          <hr className="w-100" />
          <p className="card-text">
            <dl class="row">
              <dt class="col-sm-3">Job Type</dt>
              <dd class="col-sm-9">{jobType}</dd>

              <dt class="col-sm-3">Skills</dt>
              <dd class="col-sm-9">
                <p>{skills}</p>
              </dd>
            </dl>
          </p>
        </div>
        <a href="#" className="btn btn-primary">
          Apply
        </a>
      </div>
    </div>
  );
};

export default JobSection;
