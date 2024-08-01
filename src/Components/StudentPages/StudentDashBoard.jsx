import Sidebar from './Sidebar';
import Dashboard from './DashBoard.jsx';
import "./studentDashBoard.css";

function StudentDashboard() {
  return (
    <div className="stu-dash-container" >
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default StudentDashboard;
