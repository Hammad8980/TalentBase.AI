import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const FoundingTeamEditor = () => {
  const { localFoundingTeam, setLocalFoundingTeam } = useContext(StudentDataEditoruseContext);
  const {
    MarketOpportunity = "",
    CompetitiveLandscape = ""
  } = localFoundingTeam;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Founding Team</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Market Opportunity:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={MarketOpportunity}
                  onChange={(e) => setLocalFoundingTeam(prev => ({
                    ...prev,
                    MarketOpportunity: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Competitive Landscape:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={CompetitiveLandscape}
                  onChange={(e) => setLocalFoundingTeam(prev => ({
                    ...prev,
                    CompetitiveLandscape: e.target.value
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

export default FoundingTeamEditor;
