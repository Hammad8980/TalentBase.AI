import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const TractionEditor = () => {
  const { localTraction, setLocalTraction } = useContext(StudentDataEditoruseContext);
  const {
    Keymetrics = "",
    CustomerTestemonials = "",
    Milestones = "",
    UserGrowth = ""
  } = localTraction;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Traction</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Keymetrics:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Keymetrics}
                  onChange={(e) => setLocalTraction(prev => ({
                    ...prev,
                    Keymetrics: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Customer Testemonials:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={CustomerTestemonials}
                  onChange={(e) => setLocalTraction(prev => ({
                    ...prev,
                    CustomerTestemonials: e.target.value
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Milestones:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Milestones}
                  onChange={(e) => setLocalTraction(prev => ({
                    ...prev,
                    Milestones: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>User Growth:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={UserGrowth}
                  onChange={(e) => setLocalTraction(prev => ({
                    ...prev,
                    UserGrowth: e.target.value
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

export default TractionEditor;
