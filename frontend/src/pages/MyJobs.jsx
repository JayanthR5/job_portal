import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const token = localStorage.getItem("access");

      const res = await api.get("jobs/?mine=true", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(res.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const deleteJob = async (id) => {
    try {
      const token = localStorage.getItem("access");

      await api.delete(`jobs/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Job Deleted Successfully");
      loadJobs();
    } catch (err) {
      console.log(err.response?.data);
      alert("Failed to delete job");
    }
  };

  return (
    <div className="container">
      <h1 className="title">My Jobs</h1>

      {jobs.length === 0 ? (
        <h3>No Jobs Posted Yet</h3>
      ) : (
        jobs.map((job) => (
          <div className="card" key={job.id}>
            <h2>{job.title}</h2>

            <p><strong>Company:</strong> {job.company}</p>

            <p><strong>Location:</strong> {job.location}</p>

            <p><strong>Job Type:</strong> {job.job_type}</p>

            <p><strong>Salary:</strong> ₹{job.salary}</p>

            <p>{job.description}</p>

            <div style={{ marginTop: "15px" }}>
              <Link to={`/edit-job/${job.id}`}>
                <button>Edit</button>
              </Link>

              <button
                className="delete-btn"
                onClick={() => deleteJob(job.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}