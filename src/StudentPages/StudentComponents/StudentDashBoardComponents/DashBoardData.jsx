import UserProfle from './UserProfile';
import './StudentDashboard.css';

function Dashboard() {

  return (
    <div className="stu-dash-main">
      <div className="stu-dash-header PrimaryColor1">
        <div>
          <h2>Welcome back, John!</h2>
          <p>Always stay updated in your student portal</p>
        </div>
        <div>
          <img className='ContactDiv2Div1img' src="./StudentPortal.png  " alt="A Sad Happy Student" />
        </div>
      </div>

      <UserProfle />
    </div>
  );
}

export default Dashboard;
