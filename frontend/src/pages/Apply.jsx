import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function Apply() {
    const { jobId } = useParams();

    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState("");

    const applyJob = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("access");

            const formData = new FormData();

            formData.append("job", jobId);
            formData.append("resume", resume);
            formData.append("cover_letter", coverLetter);
            formData.append("status", "PENDING");

            await api.post("applications/", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Application Submitted Successfully");
        } catch (err) {
            console.log(err.response?.data);
            alert(JSON.stringify(err.response?.data));
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Apply for Job</h1>

            <form onSubmit={applyJob}>
                <textarea
                    rows="6"
                    cols="60"
                    placeholder="Cover Letter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                />

                <br /><br />

                <input
                    type="file"
                    onChange={(e) => setResume(e.target.files[0])}
                />

                <br /><br />

                <button type="submit">
                    Submit Application
                </button>
            </form>
        </div>
    );
}