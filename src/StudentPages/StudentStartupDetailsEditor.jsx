import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentDatauseContext } from "./StudentDataProvider/StudentDataUseContext";
import { StudentDataEditoruseContext } from "./StudentDataProvider/StudentDataEditorUseContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faCloud } from '@fortawesome/free-solid-svg-icons';
import BasicInformationEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/BasicInformationEditor";
import BusinessInformationEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/BusinessInformationEditor";
import DocumentAndResourcesEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/DocumentAndResourcesEditor";
import FinancialInformationEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/FinancialInformationEditor";
import FoundingTeamEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/FoundingTeamEditor";
import MediaAndPressEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/MediaAndPressEditor";
import PitchAndVisionEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/PitchAndVisionEditor";
import TeamInformationEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/TeamInformationEditor";
import TractionEditor from "./StudentComponents/StudentStartupComponents/StudentStartUpDetailsEditorComponent/TractionEditor";

const StudentStartupDetailsEditor = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const {
        basicInformation, setBasicInformation,
        businessInformation, setBusinessInformation,
        financialInformation, setFinancialInformation,
        teamInformation, setTeamInformation,
        traction, setTraction,
        foundingTeam, setFoundingTeam,
        pitchAndVision, setPitchAndVision,
        mediaAndPress, setMediaAndPress,
        documentAndResources, setDocumentAndResources
    } = useContext(StudentDatauseContext);

    const {
        localBasicInformation, setLocalBasicInformation,
        localBusinessInformation, setLocalBusinessInformation,
        localFinancialInformation, setLocalFinancialInformation,
        localTeamInformation, setLocalTeamInformation,
        localTraction, setLocalTraction,
        localFoundingTeam, setLocalFoundingTeam,
        localPitchAndVision, setLocalPitchAndVision,
        localMediaAndPress, setLocalMediaAndPress,
        localDocumentAndResources, setLocalDocumentAndResources
    } = useContext(StudentDataEditoruseContext);

    useEffect(() => {
        const LocalEditorVariablesSet = () => {
            setLocalBasicInformation(basicInformation);
            setLocalBusinessInformation(businessInformation);
            setLocalFinancialInformation(financialInformation);
            setLocalTeamInformation(teamInformation);
            setLocalTraction(traction);
            setLocalFoundingTeam(foundingTeam);
            setLocalPitchAndVision(pitchAndVision);
            setLocalMediaAndPress(mediaAndPress);
            setLocalDocumentAndResources(documentAndResources);

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        LocalEditorVariablesSet();
    }, [
        basicInformation,
        businessInformation,
        financialInformation,
        teamInformation,
        traction,
        foundingTeam,
        pitchAndVision,
        mediaAndPress,
        documentAndResources
    ]);

    const GoBack = async () => {
        setLoading(true);
        await setLocalBasicInformation({});
        await setLocalBusinessInformation({});
        await setLocalFinancialInformation({});
        await setLocalTeamInformation({});
        await setLocalTraction({});
        await setLocalFoundingTeam({});
        await setLocalPitchAndVision({});
        await setLocalMediaAndPress({});
        await setLocalDocumentAndResources({});
        setTimeout(() => {
            setLoading(false);
            navigate(-1);
        }, 2000);
    }

    const UpdateStartupDetails = async () => {
        setLoading(true);
        await setBasicInformation(localBasicInformation);
        await setBusinessInformation(localBusinessInformation);
        await setFinancialInformation(localFinancialInformation);
        await setTeamInformation(localTeamInformation);
        await setTraction(localTraction);
        await setFoundingTeam(localFoundingTeam);
        await setPitchAndVision(localPitchAndVision);
        await setMediaAndPress(localMediaAndPress);
        await setDocumentAndResources(localDocumentAndResources);
        setTimeout(() => {
            setLoading(false);
            navigate(-1);
        }, 2000);
    }

    return (
        <>
            {loading ? (
                <div className="hourglassBackground">
                    <div className="hourglassContainer">
                        <div className="hourglassCurves"></div>
                        <div className="hourglassCapTop"></div>
                        <div className="hourglassGlassTop"></div>
                        <div className="hourglassSand"></div>
                        <div className="hourglassSandStream"></div>
                        <div className="hourglassCapBottom"></div>
                        <div className="hourglassGlass"></div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='stu-portal-button-div'>
                        <button className='stu-portal-button PrimaryColor1' onClick={GoBack}>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                            <div>Discard</div>
                        </button>
                    </div>
                    <div className="stu-portal-box-main-div">
                        <BasicInformationEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <BusinessInformationEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <FinancialInformationEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <TeamInformationEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <TractionEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <FoundingTeamEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <PitchAndVisionEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <MediaAndPressEditor />
                    </div>
                    <div className="stu-portal-box-main-div">
                        <DocumentAndResourcesEditor />
                    </div>
                    <div className='stu-editor-update-button-div'>
                        <button className='stu-editor-update-button PrimaryColor1' style={{ justifyContent: 'center', gap: '20px', display: 'flex', alignItems: 'center', fontSize: '1.3rem', overflow: 'hidden' }} onClick={UpdateStartupDetails}>
                            <><FontAwesomeIcon icon={faCloud} /></>
                            <>Update</>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default StudentStartupDetailsEditor;
