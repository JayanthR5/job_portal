import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Job Board Platform</h1>

      <br />

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br /><br />

      <Link to="/register">
        <button>Register</button>
      </Link>

      <br /><br />

      <Link to="/profile">
    <button>My Profile</button>
</Link>
    </div>
  );
}