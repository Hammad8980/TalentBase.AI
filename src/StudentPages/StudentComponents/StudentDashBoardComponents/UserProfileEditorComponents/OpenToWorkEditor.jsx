import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

function OpenToWorkEditor() {
  const { localOpenToWork, setLocalOpenToWork } = useContext(StudentDataEditoruseContext);
  const {
    Jobs = false,
    Projects = false,
    Internships = false,
    Funding = false,
    Acquisition = false,
    Collaborations = false
  } = localOpenToWork;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Open To Work</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Jobs:</td>
              <td>
                <input
                  type="checkbox"
                  checked={Jobs}
                  onChange={(e) => setLocalOpenToWork(prev => ({
                    ...prev,
                    Jobs: e.target.checked
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Projects:</td>
              <td>
                <input
                  type="checkbox"
                  checked={Projects}
                  onChange={(e) => setLocalOpenToWork(prev => ({
                    ...prev,
                    Projects: e.target.checked
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Internships:</td>
              <td>
                <input
                  type="checkbox"
                  checked={Internships}
                  onChange={(e) => setLocalOpenToWork(prev => ({
                    ...prev,
                    Internships: e.target.checked
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Funding:</td>
              <td>
                <input
                  type="checkbox"
                  checked={Funding}
                  onChange={(e) => setLocalOpenToWork(prev => ({
                    ...prev,
                    Funding: e.target.checked
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Acquisition:</td>
              <td>
                <input
                  type="checkbox"
                  checked={Acquisition}
                  onChange={(e) => setLocalOpenToWork(prev => ({
                    ...prev,
                    Acquisition: e.target.checked
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Collaboration:</td>
              <td>
                <input
                  type="checkbox"
                  checked={Collaborations}
                  onChange={(e) => setLocalOpenToWork(prev => ({
                    ...prev,
                    Collaborations: e.target.checked
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

export default OpenToWorkEditor;
