import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import MyJobs from "./pages/MyJobs";
import CreateJob from "./pages/CreateJob";
import MyApplications from "./pages/MyApplications";
import EditJob from "./pages/EditJob";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";

function App() {
    return (
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
        </Routes>
    );
}

export default App;