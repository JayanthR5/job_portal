import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import Profile from "./pages/Profile";
import MyJobs from "./pages/MyJobs";
import CreateJob from "./pages/CreateJob";
import MyApplications from "./pages/MyApplications";
import EditJob from "./pages/EditJob";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/apply/:jobId" element={<Apply />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myjobs" element={<MyJobs />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/my-applications" element={<MyApplications />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route
  path="/jobs"
  element={
    <ProtectedRoute>
      <Jobs />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/myjobs"
  element={
    <ProtectedRoute>
      <MyJobs />
    </ProtectedRoute>
  }
/>

<Route
  path="/create-job"
  element={
    <ProtectedRoute>
      <CreateJob />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-applications"
  element={
    <ProtectedRoute>
      <MyApplications />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-job/:id"
  element={
    <ProtectedRoute>
      <EditJob />
    </ProtectedRoute>
  }
/>

<Route
  path="/apply/:jobId"
  element={
    <ProtectedRoute>
      <Apply />
    </ProtectedRoute>
  }
/>
      </Routes>
    </>
  );
}

export default App;