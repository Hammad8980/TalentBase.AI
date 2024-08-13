import Sidebar from './StudentComponents/StudentDashBoardComponents/Sidebar';
import Dashboard from './StudentComponents/StudentDashBoardComponents/DashBoardData';
import "./StudentPages.css";

function StudentDashboard() {
  return (
    <div className="stu-dash-container" >
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default StudentDashboard;
