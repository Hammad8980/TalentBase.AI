import PersonalInformation from './UserProfileComponents/PersonalInformation'
import './StudentDashboard.css';

function UserProfile() {
  return (
    <div className="stu-dash-profile" >
      <PersonalInformation />
    </div>
  );
}

export default UserProfile;
