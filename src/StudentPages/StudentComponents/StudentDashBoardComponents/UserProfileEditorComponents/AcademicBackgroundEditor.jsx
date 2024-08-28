import { useContext } from "react";
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

function AcademicBackgroundEditor() {
  const { localAcademicBackground, setLocalAcademicBackground } = useContext(StudentDataEditoruseContext);
  const {
    YearOfCompletion = "",
    CurrentEducation = "",
    Degree = ""
  } = localAcademicBackground;

  

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Academic Background</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Year of Completion:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={YearOfCompletion}
                  onChange={(e) => setLocalAcademicBackground(prev => ({
                    ...prev,
                    YearOfCompletion: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Current Education:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={CurrentEducation}
                  onChange={(e) => setLocalAcademicBackground(prev => ({
                    ...prev,
                    CurrentEducation: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Degree:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Degree}
                  onChange={(e) => setLocalAcademicBackground(prev => ({
                    ...prev,
                    Degree: e.target.value
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

export default AcademicBackgroundEditor;
