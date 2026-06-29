import { useState } from "react";
import api from "../services/api";

export default function CreateJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    job_type: "FULL_TIME",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const createJob = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("access");

      await api.post("jobs/", job, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Job Created Successfully");

      setJob({
        title: "",
        company: "",
        location: "",
        job_type: "FULL_TIME",
        salary: "",
        description: "",
      });

    } catch (err) {
      console.log(err.response?.data);
      alert("Failed to create job");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Create Job</h1>

      <form onSubmit={createJob}>

        <input
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="job_type"
          value={job.job_type}
          onChange={handleChange}
        >
          <option value="FULL_TIME">Full Time</option>
          <option value="PART_TIME">Part Time</option>
          <option value="INTERNSHIP">Internship</option>
          <option value="REMOTE">Remote</option>
        </select>

        <br /><br />

        <input
          name="salary"
          type="number"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          rows="5"
          cols="40"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Create Job</button>

      </form>
    </div>
  );
}