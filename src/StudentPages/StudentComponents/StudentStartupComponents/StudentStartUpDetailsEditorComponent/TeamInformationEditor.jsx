import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const TeamInformationEditor = () => {
  const { localTeamInformation, setLocalTeamInformation } = useContext(StudentDataEditoruseContext);
  const {
    FoundingTeam = "",
    EmployeeCount = "",
    AdvisoryBoard = ""
  } = localTeamInformation;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Team Information</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Founding Team:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={FoundingTeam}
                  onChange={(e) => setLocalTeamInformation(prev => ({
                    ...prev,
                    FoundingTeam: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Employee Count:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={EmployeeCount}
                  onChange={(e) => setLocalTeamInformation(prev => ({
                    ...prev,
                    EmployeeCount: e.target.value
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Advisory Board:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={AdvisoryBoard}
                  onChange={(e) => setLocalTeamInformation(prev => ({
                    ...prev,
                    AdvisoryBoard: e.target.value
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

export default TeamInformationEditor;
