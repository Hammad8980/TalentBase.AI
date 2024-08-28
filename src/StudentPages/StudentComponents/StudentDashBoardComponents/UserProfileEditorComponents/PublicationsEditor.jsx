import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const PublicationsEditor = () => {
    const { localPublications, setLocalPublications } = useContext(StudentDataEditoruseContext);
    const { 
        Articles = "", 
        Interviews = "" 
    } = localPublications;

    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Publications</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Articles:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Articles}
                                    onChange={(e) => setLocalPublications(prev => ({
                                        ...prev,
                                        Articles: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Interviews:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Interviews}
                                    onChange={(e) => setLocalPublications(prev => ({
                                        ...prev,
                                        Interviews: e.target.value
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

export default PublicationsEditor;
