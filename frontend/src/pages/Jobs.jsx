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
      console.log(error.response?.data);
      alert(JSON.stringify(error.response?.data || error.message));
    }
  };

  return (
    <div className="container">

      <h1 className="title">Available Jobs</h1>

      {jobs.length === 0 ? (
        <h3>No Jobs Found</h3>
      ) : (
        jobs.map((job) => (
          <div className="card" key={job.id}>

            <h2>{job.title}</h2>

            <p><strong>Company:</strong> {job.company}</p>

            <p><strong>Location:</strong> {job.location}</p>

            <p><strong>Job Type:</strong> {job.job_type}</p>

            <p><strong>Salary:</strong> ₹{job.salary}</p>

            <p>{job.description}</p>

            <Link to={`/apply/${job.id}`}>
              <button>Apply Now</button>
            </Link>

          </div>
        ))
      )}

    </div>
  );
}