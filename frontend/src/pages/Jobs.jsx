import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get("jobs/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(response.data);
    } catch (error) {
    console.log(error);
    console.log(error.response);
    console.log(error.response?.data);

    alert(JSON.stringify(error.response?.data || error.message));
}
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Available Jobs</h1>

      {jobs.length === 0 ? (
        <h3>No Jobs Found</h3>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            style={{
              border: "1px solid gray",
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>{job.title}</h2>

            <p><b>Company:</b> {job.company}</p>

            <p><b>Location:</b> {job.location}</p>

            <p><b>Job Type:</b> {job.job_type}</p>

            <p><b>Salary:</b> ₹{job.salary}</p>

            <p>{job.description}</p>

            <Link to={`/apply/${job.id}`}>
    <button>Apply</button>
</Link>
          </div>
        ))
      )}
    </div>
  );
}