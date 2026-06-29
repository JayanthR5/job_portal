import { useEffect, useState } from "react";
import api from "../services/api";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const token = localStorage.getItem("access");

      const res = await api.get("applications/?mine=true", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Applications:", res.data);
setApplications(res.data);
    } catch (err) {
  console.log(err);
  console.log(err.response?.data);
  alert(JSON.stringify(err.response?.data || err.message));
}
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <h3>No Applications Found</h3>
      ) : (
        applications.map((app) => (
          <div
            key={app.id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Job ID: {app.job}</h2>

            <p>
              <b>Status:</b> {app.status}
            </p>

            <p>
              <b>Applied At:</b> {app.applied_at}
            </p>

            <a
              href={app.resume}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>

            <p>{app.cover_letter}</p>
          </div>
        ))
      )}
    </div>
  );
}