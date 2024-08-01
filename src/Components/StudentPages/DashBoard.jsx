import UserProfle from './UserProfile';
import AcademicBackground from './AcademicBackground';
import './studentDashBoard.css';

function Dashboard() {
  return (
    <div className="stu-dash-main">
      <div className="stu-dash-header">
        <h2>Welcome back, John!</h2>
        <p>Always stay updated in your student portal</p>
      </div>
      <UserProfle />
      <AcademicBackground />
    </div>
  );
}

export default Dashboard;
