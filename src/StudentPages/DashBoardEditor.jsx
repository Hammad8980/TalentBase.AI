import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { StudentDatauseContext } from './StudentDataProvider/StudentDataUseContext';
import { StudentDataEditoruseContext } from './StudentDataProvider/StudentDataEditorUseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faCloud } from '@fortawesome/free-solid-svg-icons';
import PersonalInformationEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/PersonalInformationEditor';
import AcademicBackgroundEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/AcademicBackgroundEditor';
import ProfessionalBackgroundEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/ProfessionalBackgroundEditor';
import AchievementsAndAwardsEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/AchievementsAndAwardsEditor';
import ProfessionalNetworksEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/ProfessionalNetworksEditor';
import PublicationsEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/PublicationsEditor';
import PersonalStatementEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/PersonalStatementEditor';
import OpenToWorkEditor from './StudentComponents/StudentDashBoardComponents/UserProfileEditorComponents/OpenToWorkEditor';
function DashboardEditor() {
    const navigate = useNavigate();
    const {
        personalInformation, setPersonalInformation,
        academicBackground, setAcademicBackground,
        professionalBackground, setProfessionalBackground,
        achievementsAndAwards, setAchievementsAndAwards,
        professionalNetworks, setProfessionalNetworks,
        publications, setPublications,
        personalStatement, setPersonalStatement,
        openToWork, setOpenToWork
    } = useContext(StudentDatauseContext);
    const {
        localPersonalInformation, setLocalPersonalInformation,
        localAcademicBackground, setLocalAcademicBackground,
        localProfessionalBackground, setLocalProfessionalBackground,
        localAchievementsAndAwards, setLocalAchievementsAndAwards,
        localProfessionalNetworks, setLocalProfessionalNetworks,
        localPublications, setLocalPublications,
        localPersonalStatement, setLocalPersonalStatement,
        localOpenToWork, setLocalOpenToWork
    } = useContext(StudentDataEditoruseContext);


    useEffect(() => {
        setLocalPersonalInformation(personalInformation);
        setLocalAcademicBackground(academicBackground);
        setLocalProfessionalBackground(professionalBackground);
        setLocalAchievementsAndAwards(achievementsAndAwards);
        setLocalProfessionalNetworks(professionalNetworks);
        setLocalPublications(publications);
        setLocalPersonalStatement(personalStatement);
        setLocalOpenToWork(openToWork);
    }, [
        personalInformation,
        academicBackground,
        professionalBackground,
        achievementsAndAwards,
        professionalNetworks,
        publications,
        personalStatement,
        openToWork
    ]);

    const GoBack = () => {
        setLocalPersonalInformation({});
        setLocalAcademicBackground({});
        setLocalProfessionalBackground({});
        setLocalAchievementsAndAwards({});
        setLocalProfessionalNetworks({});
        setLocalPublications({});
        setLocalPersonalStatement({});
        setLocalOpenToWork({});
        navigate(-1);
    }

    const UpdateDashBoardData = () => {
        setPersonalInformation(localPersonalInformation);
        setAcademicBackground(localAcademicBackground);
        setProfessionalBackground(localProfessionalBackground);
        setAchievementsAndAwards(localAchievementsAndAwards);
        setProfessionalNetworks(localProfessionalNetworks);
        setPublications(localPublications);
        setPersonalStatement(localPersonalStatement);
        setOpenToWork(localOpenToWork);
        console.log("Updated");
        navigate(-1);
    }

    return (
        <div>
            <div className='stu-portal-button-div'>
                <button className='stu-portal-button PrimaryColor1' onClick={GoBack}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                    <div>Discard</div>
                </button>
            </div>
            <div className="stu-portal-box-main-div" >
                <PersonalInformationEditor />
            </div>
            <div className="stu-portal-box-main-div" >
                <AcademicBackgroundEditor />
            </div>
            <div className="stu-portal-box-main-div" >
                <ProfessionalBackgroundEditor />
            </div>
            <div className="stu-portal-box-main-div" >
                <AchievementsAndAwardsEditor />
            </div>
            <div className="stu-portal-box-main-div" >
                <ProfessionalNetworksEditor />
            </div>
            <div className="stu-portal-box-main-div" >
                <PublicationsEditor />
            </div>
            <div className="stu-portal-box-main-div" >
                <PersonalStatementEditor />
            </div>
            <div className="stu-portal-box-main-div" >
                <OpenToWorkEditor />
            </div>
            <div className='stu-editor-update-button-div'>
                <button className='stu-editor-update-button PrimaryColor1' style={{justifyContent: 'center', gap: '20px', display: 'flex', alignItems: 'center', fontSize: '1.3rem', overflow: 'hidden'}} onClick={UpdateDashBoardData}>
                    <><FontAwesomeIcon icon={faCloud} /></>
                    <>Update</>
                </button>
            </div>
        </div>
    );
}

export default DashboardEditor;
