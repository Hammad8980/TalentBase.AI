import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const ProfessionalNetworksEditor = () => {
    const { localProfessionalNetworks, setLocalProfessionalNetworks } = useContext(StudentDataEditoruseContext);
    const {
        Mentors = "",
        Association = ""
    } = localProfessionalNetworks;

    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Professional Networks</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Mentors:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Mentors}
                                    onChange={(e) => setLocalProfessionalNetworks(prev => ({
                                        ...prev,
                                        Mentors: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Association:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Association}
                                    onChange={(e) => setLocalProfessionalNetworks(prev => ({
                                        ...prev,
                                        Association: e.target.value
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

export default ProfessionalNetworksEditor;
