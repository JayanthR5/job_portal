import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("access");

  if (!token) return null;

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>Job Board</h2>

      <div className="nav-links">
        <Link to="/jobs">Jobs</Link>

        <Link to="/create-job">Create Job</Link>

        <Link to="/myjobs">My Jobs</Link>

        <Link to="/my-applications">Applications</Link>

        <Link to="/profile">Profile</Link>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}