import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import PersonalInformation from './UserProfileComponents/PersonalInformation'
import AcademicBackground from './UserProfileComponents/AcademicBackground';
import ProfessionalBackground from './UserProfileComponents/ProfessionalBackground';
import AchievementsAndAwards from './UserProfileComponents/AchievementsAndAwards';
import ProfessionalNetworks from './UserProfileComponents/ProfessionalNetworks';
import Publications from './UserProfileComponents/Publications';
import PersonalStatement from './UserProfileComponents/PersonalStatement';
import OpenToWork from './UserProfileComponents/OpenToWork';
import './StudentDashboard.css';

function Dashboard() {

  const navigate = useNavigate();

  const personalInformation = {
    Name: "John Doe",
    Email: "john.doe@example.com",
    PhoneNumber: "+1 (555) 123-4567",
    PersonalWebsite: "https://johnswebsite.com",
    LinkedIn: "https://linkedin.com/in/johndoe",
    Location: "New York, NY"
  };
  const academicBackground = {
    YearOfCompletion: "2024",
    CurrentEducation: "BSCS",
    Degree: "Bachelors in Computer Science"
  };
  const professionalBackground = {
    CurrentPosition: "Manager",
    EducationalBackground: "BSCS",
    Skills: "Something"
  };
  const achievementsAndAwards = {
    Achievements: "Lots of.....",
    Awards: "Gold Medal"
  };
  const professionalNetworks = {
    Mentors: "Ali Doe",
    Association: "Something"
  };
  const publications = {
    Articles: "https://linkedin.com/in/johndoe",
    Interviews: "Interviews"
  };
  const personalStatement = {
    Goals: "These are my goals",
    Visions: "This is my vision",
    Biography: "This is my biography"
  };
  const openToWork = {
    Jobs: true,
    Projects: true,
    Internships: true,
    Funding: false,
    Acquisition: true,
    Collaborations: false
  };


  const StudentDashBoardEditor = () => {
    navigate('/studentDashboardEditor');
  }

  return (
    <div>
      <div className='stu-portal-button-div'>
        <button className='stu-portal-button PrimaryColor1' onClick={StudentDashBoardEditor}>
          <div>Edit Profile</div>
          <div><FontAwesomeIcon icon={faGear} /></div>
        </button>
      </div>
      <div className="stu-portal-box-main-div" >
        <PersonalInformation personalInformation={personalInformation}/>
      </div>
      <div className="stu-portal-box-main-div" >
        <AcademicBackground academicBackground={academicBackground}/>
      </div>
      <div className="stu-portal-box-main-div" >
        <ProfessionalBackground professionalBackground={professionalBackground}/>
      </div>
      <div className="stu-portal-box-main-div" >
        <AchievementsAndAwards achievementsAndAwards={achievementsAndAwards}/>
      </div>
      <div className="stu-portal-box-main-div" >
        <ProfessionalNetworks professionalNetworks={professionalNetworks} />
      </div>
      <div className="stu-portal-box-main-div" >
        <Publications publications={publications} />
      </div>
      <div className="stu-portal-box-main-div" >
        <PersonalStatement personalStatement={personalStatement} />
      </div>
      <div className="stu-portal-box-main-div" >
        <OpenToWork openToWork={openToWork} />
      </div>
    </div>
  );
}

export default Dashboard;
