import React from "react";
import bot from "../assets/Images/bot.jpg";
import JobSection from "./JobSection";

const CareerPage = ({ data }) => {
  const { companyName, shortDesc, jobs } = data;
  return (
    <div className="container-lg py-2">
      <div className="row">
        <div className="col-sm-2">
          <img src={bot} className="w-100 h-100" />
        </div>
        <div className="col-sm-10">
          <h2>{companyName}</h2>
          <p className="fst-italic">{shortDesc}</p>
        </div>
        <hr className="my-2" />
        <div className="row mt-2 ps-4">
          <h2>Job Openings</h2>
          {jobs.map((job) => (
            <JobSection job={job} key={job.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
