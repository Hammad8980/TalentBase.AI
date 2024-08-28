import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const MediaAndPressEditor = () => {
  const { localMediaAndPress, setLocalMediaAndPress } = useContext(StudentDataEditoruseContext);
  const {
    PressReleases = "",
    MediaCoverage = "",
    AwardsAndRecognition = ""
  } = localMediaAndPress;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Media & Press</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Press Releases:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={PressReleases}
                  onChange={(e) => setLocalMediaAndPress(prev => ({
                    ...prev,
                    PressReleases: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Media Coverage:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={MediaCoverage}
                  onChange={(e) => setLocalMediaAndPress(prev => ({
                    ...prev,
                    MediaCoverage: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Awards And Recognition:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={AwardsAndRecognition}
                  onChange={(e) => setLocalMediaAndPress(prev => ({
                    ...prev,
                    AwardsAndRecognition: e.target.value
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

export default MediaAndPressEditor;
