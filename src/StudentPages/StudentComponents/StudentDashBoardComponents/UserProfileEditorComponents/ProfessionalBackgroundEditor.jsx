import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const ProfessionalBackgroundEditor = () => {
    const { localProfessionalBackground, setLocalProfessionalBackground } = useContext(StudentDataEditoruseContext);
    const { 
        CurrentPosition = "", 
        EducationalBackground = "",  
        Skills = "" 
    } = localProfessionalBackground;

    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Professional Background</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Current Position:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={CurrentPosition}
                                    onChange={(e) => setLocalProfessionalBackground(prev => ({
                                        ...prev,
                                        CurrentPosition: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Educational Background:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={EducationalBackground}
                                    onChange={(e) => setLocalProfessionalBackground(prev => ({
                                        ...prev,
                                        EducationalBackground: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Skills:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Skills}
                                    onChange={(e) => setLocalProfessionalBackground(prev => ({
                                        ...prev,
                                        Skills: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProfessionalBackgroundEditor;
