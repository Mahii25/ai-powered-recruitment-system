import React, { useState } from "react";


const JobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    jobDesc: "",
    skills: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("jobTitle", formData.jobTitle);
    form.append("jobType", formData.jobType);
    form.append("jobDesc", formData.jobDesc);
    form.append("skills", formData.skills);
    console.log(formData);
    setFormData({...formData, formData.jobTitle: "", formData.jobType: "", formData.jobDesc: "", formData.skills: "" });
    try {
      const res = await axios.post('api-call', form); // api-call
    if (res.status === 200) {
      console.log('Form sent');
    } else {
      console.log('Error');
    }
    } catch (err) {
      console.error("Error", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-2">
      <div className="row my-2 border bourder rounded">
        <h2 className="text-center">Post a Job</h2>
        <form className="py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="jobTitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              name="jobTitle"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jobType" className="form-label">
              Job Type
            </label>
            <input
              type="text"
              className="form-control"
              id="jobType"
              name="jobType"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jobDesc" className="form-label">
              Job Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="jobDesc"
              name="jobDesc"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Job Skills
            </label>
            <textarea
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
