import { useEffect, useState } from "react";
import api from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("access");

    const res = await api.get("users/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("API Response:", res.data);

   

    if (Array.isArray(res.data)) {
      setUser(res.data[0]);
    } else {
      setUser(res.data);
    }
  } catch (err) {
    console.log(err.response?.data);
  }
};

  if (!user) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Profile</h1>

      <p><b>Username:</b> {user.username}</p>

      <p><b>Email:</b> {user.email}</p>

      <p><b>Role:</b> {user.role}</p>

      <p><b>Phone:</b> {user.phone}</p>

      {user.profile_image && (
        <img
          src={user.profile_image}
          alt="profile"
          width="150"
        />
      )}
    </div>
  );
}
