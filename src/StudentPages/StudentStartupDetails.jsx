import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { StudentDatauseContext } from './StudentDataProvider/StudentDataUseContext';
import BasicInformation from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/BasicInformation";
import BusinessInformation from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/BusinessInformation";
import FinancialInformation from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/FinancialInformation";
import TeamInformation from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/TeamInformation";
import Traction from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/Traction";
import FoundingTeam from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/FoundingTeam";
import PitchAndVision from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/PitchAndVision";
import MediaAndPress from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/MediaAndPress";
import DocumentAndResources from "./StudentComponents/StudentStartupComponents/StudentStartupDetailsComponents/DocumentAndResources";

const StudentStartupDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        basicInformation, setBasicInformation,
        businessInformation, setBusinessInformation,
        documentAndResources, setDocumentAndResources,
        financialInformation, setFinancialInformation,
        foundingTeam, setFoundingTeam,
        mediaAndPress, setMediaAndPress,
        pitchAndVision, setPitchAndVision,
        teamInformation, setTeamInformation,
        traction, setTraction
    } = useContext(StudentDatauseContext);

    useEffect(() => {
        console.log("the id", id);
        setBasicInformation({
            StartupName: "my Name",
            FoundedDate: "2/8/2001",
            Logo: "my logo",
            HeadQuaters: "the headquater"
        });
        setBusinessInformation({
            Industry: "fake data is fake",
            BusinessModel: "fake data is fake",
            Products: "fake data is fake",
            TargetMarket: "fake data is fake",
            Picture: "fake data is fake"
        });
        setFinancialInformation({
            FundingStage: "fake data is fake",
            TotalFundingRaised: "fake data is fake",
            Revenue: "fake data is fake",
            Investors: "fake data is fake"
        });
        setTeamInformation({
            FoundingTeam: "fake data is fake",
            EmployeeCount: "fake data is fake",
            AdvisoryBoard: "fake data is fake"
        });
        setTraction({
            Keymetrics: "fake data is fake",
            CustomerTestemonials: "fake data is fake",
            Milestones: "fake data is fake",
            UserGrowth: "fake data is fake"
        });
        setFoundingTeam({
            MarketOpportunity: "fake data is fake",
            CompetitiveLandscape: "fake data is fake"
        });
        setPitchAndVision({
            ElevatorPitch: "fake data is fake",
            VisionStatement: "fake data is fake",
            UseOfFunds: "fake data is fake"
        });
        setMediaAndPress({
            PressReleases: "fake data is fake",
            MediaCoverage: "fake data is fake",
            AwardsAndRecognition: "fake data is fake"
        });
        setDocumentAndResources({
            PitchDeck: "fake data is fake",
            BusinessPlan: "fake data is fake",
            Videos: "fake data is fake"
        });
    }, [
        setBasicInformation,
        setBusinessInformation,
        setFinancialInformation,
        setTeamInformation,
        setTraction,
        setFoundingTeam,
        setPitchAndVision,
        setMediaAndPress,
        setDocumentAndResources,
        id
    ]);

    const StartupDetailEditor = () => {
        navigate("/studentStartupDetailsEditor");
    };

    return (
        <div>
            <div className='stu-portal-button-div'>
                <button className='stu-portal-button PrimaryColor1' onClick={StartupDetailEditor}>
                <div>Edit Startup Info</div>
                <div><FontAwesomeIcon icon={faGear} /></div>
                </button>
            </div>
            <div className="stu-portal-box-main-div" >
                <BasicInformation basicInformation={basicInformation} />
            </div>
            <div className="stu-portal-box-main-div" >
                <BusinessInformation businessInformation={businessInformation} />
            </div>
            <div className="stu-portal-box-main-div" >
                <FinancialInformation financialInformation={financialInformation} />
            </div>
            <div className="stu-portal-box-main-div" >
                <TeamInformation teamInformation={teamInformation} />
            </div>
            <div className="stu-portal-box-main-div" >
                <Traction traction={traction} />
            </div>
            <div className="stu-portal-box-main-div" >
                <FoundingTeam foundingTeam={foundingTeam} />
            </div>
            <div className="stu-portal-box-main-div" >
                <PitchAndVision pitchAndVision={pitchAndVision} />
            </div>
            <div className="stu-portal-box-main-div" >
                <MediaAndPress mediaAndPress={mediaAndPress} />
            </div>
            <div className="stu-portal-box-main-div" >
                <DocumentAndResources documentAndResources={documentAndResources} />
            </div>
        </div>
    )
}

export default StudentStartupDetails