import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const PitchAndVisionEditor = () => {
  const { localPitchAndVision, setLocalPitchAndVision } = useContext(StudentDataEditoruseContext);
  const {
    ElevatorPitch = "",
    VisionStatement = "",
    UseOfFunds = ""
  } = localPitchAndVision;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Pitch & Vision</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Elevator Pitch:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={ElevatorPitch}
                  onChange={(e) => setLocalPitchAndVision(prev => ({
                    ...prev,
                    ElevatorPitch: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Vision Statement:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={VisionStatement}
                  onChange={(e) => setLocalPitchAndVision(prev => ({
                    ...prev,
                    VisionStatement: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Use of Funds:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={UseOfFunds}
                  onChange={(e) => setLocalPitchAndVision(prev => ({
                    ...prev,
                    UseOfFunds: e.target.value
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

export default PitchAndVisionEditor;
