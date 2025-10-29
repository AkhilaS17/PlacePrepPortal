import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user || user.role !== "student") {
    return (
      <div className="unauthorized">
        <h2>Access Denied</h2>
        <p>You must be a student to view this page.</p>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="dashboard student-dashboard">
      <h2>Welcome, {user.username}</h2>
      <p>Ready to share your placement experience or explore resources?</p>
      <button onClick={() => navigate("/alumni")}>Go to Alumni Page</button>
      <button onClick={() => navigate("/references")}>Go to Resources</button>
    </div>
  );
}

export default StudentDashboard;
