import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const PersonalInformationEditor = () => {
    const { localPersonalInformation, setLocalPersonalInformation } = useContext(StudentDataEditoruseContext);
    const {
        Name = "",
        Email = "",
        PhoneNumber = "",
        PersonalWebsite = "",
        LinkedIn = "",
        Location = ""
    } = localPersonalInformation;
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Personal Information</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Name}
                                    onChange={(e) => setLocalPersonalInformation(prev => ({
                                        ...prev,
                                        Name: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Email:</td>
                            <td>
                                <input
                                    type="email"
                                    placeholder="Ø Undefined"
                                    value={Email}
                                    onChange={(e) => setLocalPersonalInformation(prev => ({
                                        ...prev,
                                        Email: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Phone Number:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={PhoneNumber}
                                    onChange={(e) => setLocalPersonalInformation(prev => ({
                                        ...prev,
                                        PhoneNumber: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Personal Website:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={PersonalWebsite}
                                    onChange={(e) => setLocalPersonalInformation(prev => ({
                                        ...prev,
                                        PersonalWebsite: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>LinkedIn:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={LinkedIn}
                                    onChange={(e) => setLocalPersonalInformation(prev => ({
                                        ...prev,
                                        LinkedIn: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Location:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Ø Undefined"
                                    value={Location}
                                    onChange={(e) => setLocalPersonalInformation(prev => ({
                                        ...prev,
                                        Location: e.target.value
                                    }))}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default PersonalInformationEditor
