import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "JOB_SEEKER",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await api.post("register/", form);
      alert("Registration Successful");
    } catch (err) {
  console.log(err.response?.data);
  alert(JSON.stringify(err.response?.data));
}
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <form onSubmit={register}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="role"
          onChange={handleChange}
        >
          <option value="JOB_SEEKER">Job Seeker</option>
          <option value="EMPLOYER">Employer</option>
        </select>

        <br /><br />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}