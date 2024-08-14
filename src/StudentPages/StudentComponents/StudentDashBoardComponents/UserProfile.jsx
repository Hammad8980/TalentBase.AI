import PersonalInformation from './UserProfileComponents/PersonalInformation'
import AcademicBackground from './UserProfileComponents/AcademicBackground';
import ProfessionalBackground from './UserProfileComponents/ProfessionalBackground';
import AchievementsAndAwards from './UserProfileComponents/AchievementsAndAwards';
import ProfessionalNetworks from './UserProfileComponents/ProfessionalNetworks';
import Publications from './UserProfileComponents/Publications';
import PersonalStatement from './UserProfileComponents/PersonalStatement';
import OpenToWork from './UserProfileComponents/OpenToWork';
import './StudentDashboard.css';

function UserProfile() {
  return (
    <>
      <div className="stu-dash-profile" >
        <PersonalInformation />
      </div>
      <div className="stu-dash-profile" >
        <AcademicBackground />
      </div>
      <div className="stu-dash-profile" >
        <ProfessionalBackground />
      </div>
      <div className="stu-dash-profile" >
        <AchievementsAndAwards />
      </div>
      <div className="stu-dash-profile" >
        <ProfessionalNetworks />
      </div>
      <div className="stu-dash-profile" >
        <Publications />
      </div>
      <div className="stu-dash-profile" >
        <PersonalStatement />
      </div>
      <div className="stu-dash-profile" >
        <OpenToWork />
      </div>
    </>
  );
}

export default UserProfile;
