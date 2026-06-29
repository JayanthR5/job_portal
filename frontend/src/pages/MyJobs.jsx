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
    const token = localStorage.getItem("access");

    await api.delete(`jobs/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loadJobs();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Jobs</h1>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{job.title}</h2>

          <p>{job.company}</p>

         <Link to={`/edit-job/${job.id}`}>
  <button>Edit</button>
</Link>

{" "}

<button
  onClick={() => deleteJob(job.id)}
>
  Delete
</button>
        </div>
      ))}
    </div>
  );
}