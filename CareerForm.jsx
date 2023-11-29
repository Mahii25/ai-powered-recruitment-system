import React, { useState } from "react";

const CareerForm = () => {
  const [formData, setFormData] = useState({ logo: null, description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("logo", formData.logo);
    form.append("description", formData.description);
    console.log(formData);
    try {
      const res = await fetch("", { // api call
        method: "POST",
        body: form,
      });
      if (res.ok) {
        console.log("form sent");
      } else {
        console.log("error");
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
        <h2 className="text-center">Update Company Details</h2>
        <form className="py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Company Logo
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              accept="image/*"
              required
              onChange={handleChange}
              name="logo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Company Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              required
              onChange={handleChange}
              name="description"
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

export default CareerForm;
