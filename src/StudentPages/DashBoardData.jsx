import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { StudentDatauseContext } from './StudentDataProvider/StudentDataUseContext';
import PersonalInformation from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/PersonalInformation'
import AcademicBackground from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/AcademicBackground';
import ProfessionalBackground from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/ProfessionalBackground';
import AchievementsAndAwards from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/AchievementsAndAwards';
import ProfessionalNetworks from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/ProfessionalNetworks';
import Publications from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/Publications';
import PersonalStatement from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/PersonalStatement';
import OpenToWork from './StudentComponents/StudentDashBoardComponents/UserProfileComponents/OpenToWork';

function DashboardData() {
  const {
    personalInformation,
    academicBackground,
    professionalBackground,
    achievementsAndAwards,
    professionalNetworks,
    publications,
    personalStatement,
    openToWork
  } = useContext(StudentDatauseContext);

  const navigate = useNavigate();


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
        <PersonalInformation personalInformation={personalInformation} />
      </div>
      <div className="stu-portal-box-main-div" >
        <AcademicBackground academicBackground={academicBackground} />
      </div>
      <div className="stu-portal-box-main-div" >
        <ProfessionalBackground professionalBackground={professionalBackground} />
      </div>
      <div className="stu-portal-box-main-div" >
        <AchievementsAndAwards achievementsAndAwards={achievementsAndAwards} />
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

export default DashboardData;
