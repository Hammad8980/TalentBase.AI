import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const PersonalStatementEditor = () => {
    const { localPersonalStatement, setLocalPersonalStatement } = useContext(StudentDataEditoruseContext);

    const { 
        Goals = "",
        Visions = "",
        Biography = ""
     } = localPersonalStatement;

    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Personal Statement</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Goals:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Goals}
                                    onChange={(e) => setLocalPersonalStatement(prev => ({
                                        ...prev,
                                        Goals: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Visions:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Visions}
                                    onChange={(e) => setLocalPersonalStatement(prev => ({
                                        ...prev,
                                        Visions: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Biography:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Biography}
                                    onChange={(e) => setLocalPersonalStatement(prev => ({
                                        ...prev,
                                        Biography: e.target.value
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

export default PersonalStatementEditor;
