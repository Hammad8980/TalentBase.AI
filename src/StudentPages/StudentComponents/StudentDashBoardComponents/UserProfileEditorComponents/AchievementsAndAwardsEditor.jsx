import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

function AchievementsAndAwardsEditor() {
  const { localAchievementsAndAwards, setLocalAchievementsAndAwards } = useContext(StudentDataEditoruseContext);
  const {
    Achievements = "",
    Awards = ""
  } = localAchievementsAndAwards;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Achievements & Awards</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Achievements:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Achievements}
                  onChange={(e) => setLocalAchievementsAndAwards(prev => ({
                    ...prev,
                    Achievements: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Awards:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Awards}
                  onChange={(e) => setLocalAchievementsAndAwards(prev => ({
                    ...prev,
                    Awards: e.target.value
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

export default AchievementsAndAwardsEditor;
