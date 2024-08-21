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

    return (
        <div>
            <div className="stu-portal-box-main-div" >
                <PersonalInformation />
            </div>
            <div className="stu-portal-box-main-div" >
                <AcademicBackground />
            </div>
            <div className="stu-portal-box-main-div" >
                <ProfessionalBackground />
            </div>
            <div className="stu-portal-box-main-div" >
                <AchievementsAndAwards />
            </div>
            <div className="stu-portal-box-main-div" >
                <ProfessionalNetworks />
            </div>
            <div className="stu-portal-box-main-div" >
                <Publications />
            </div>
            <div className="stu-portal-box-main-div" >
                <PersonalStatement />
            </div>
            <div className="stu-portal-box-main-div" >
                <OpenToWork />
            </div>
        </div>
    );
}

export default Dashboard;
