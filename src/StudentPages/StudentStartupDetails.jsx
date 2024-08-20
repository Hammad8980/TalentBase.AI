import BasicInformation from "./StudentComponents/StudentStartupDetailsCompoents/BasicInformation";
import BusinessInformation from "./StudentComponents/StudentStartupDetailsCompoents/BusinessInformation";
import FinancialInformation from "./StudentComponents/StudentStartupDetailsCompoents/FinancialInformation";
import TeamInformation from "./StudentComponents/StudentStartupDetailsCompoents/TeamInformation";
import Traction from "./StudentComponents/StudentStartupDetailsCompoents/Traction";
import FoundingTeam from "./StudentComponents/StudentStartupDetailsCompoents/FoundingTeam";
import PitchAndVision from "./StudentComponents/StudentStartupDetailsCompoents/PitchAndVision";
import MediaAndPress from "./StudentComponents/StudentStartupDetailsCompoents/MediaAndPress";
import DocumentAndResources from "./StudentComponents/StudentStartupDetailsCompoents/DocumentAndResources";

const StudentStartupDetails = () => {
    return (
        <div>
            <div className="stu-portal-box-main-div" >
                <BasicInformation />
            </div>
            <div className="stu-portal-box-main-div" >
                <BusinessInformation />
            </div>
            <div className="stu-portal-box-main-div" >
                <FinancialInformation />
            </div>
            <div className="stu-portal-box-main-div" >
                <TeamInformation />
            </div>
            <div className="stu-portal-box-main-div" >
                <Traction />
            </div>
            <div className="stu-portal-box-main-div" >
                <FoundingTeam />
            </div>
            <div className="stu-portal-box-main-div" >
                <PitchAndVision />
            </div>
            <div className="stu-portal-box-main-div" >
                <MediaAndPress />
            </div>
            <div className="stu-portal-box-main-div" >
                <DocumentAndResources />
            </div>
        </div>
    )
}
