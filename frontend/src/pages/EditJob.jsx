import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    job_type: "FULL_TIME",
    salary: "",
    description: "",
  });

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    const token = localStorage.getItem("access");

    const res = await api.get(`jobs/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setJob(res.data);
  };

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const updateJob = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access");

    await api.put(`jobs/${id}/`, job, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Job Updated Successfully");

    navigate("/myjobs");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Job</h1>

      <form onSubmit={updateJob}>
        <input
          name="title"
          value={job.title}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="company"
          value={job.company}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="location"
          value={job.location}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="job_type"
          value={job.job_type}
          onChange={handleChange}
        >
          <option value="FULL_TIME">FULL_TIME</option>
          <option value="PART_TIME">PART_TIME</option>
          <option value="INTERNSHIP">INTERNSHIP</option>
          <option value="REMOTE">REMOTE</option>
        </select>

        <br /><br />

        <input
          name="salary"
          value={job.salary}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          rows="5"
          cols="40"
          name="description"
          value={job.description}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Job
        </button>
      </form>
    </div>
  );
}