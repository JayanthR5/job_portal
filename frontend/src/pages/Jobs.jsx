import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
const [location, setLocation] = useState("");
const [jobType, setJobType] = useState("");

 useEffect(() => {
  fetchJobs();
}, [title, location, jobType]);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get(
  `jobs/?title=${title}&location=${location}&job_type=${jobType}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
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
      <div className="card">

  <input
    type="text"
    placeholder="Search by Job Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />

  <select
    value={jobType}
    onChange={(e) => setJobType(e.target.value)}
  >
    <option value="">All Job Types</option>
    <option value="FULL_TIME">Full Time</option>
    <option value="PART_TIME">Part Time</option>
    <option value="INTERNSHIP">Internship</option>
    <option value="REMOTE">Remote</option>
  </select>

</div>

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