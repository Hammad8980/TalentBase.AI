import { useContext } from 'react'
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";
const BasicInformationEditor = () => {
  const {localBasicInformation, setLocalBasicInformation} = useContext(StudentDataEditoruseContext);
  const {
    StartupName = "",
    FoundedDate = "",
    Logo = "",
    HeadQuaters = ""
  } = localBasicInformation;
  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Basic Information</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Startup Name:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={StartupName}
                  onChange={(e) => setLocalBasicInformation(prev => ({
                    ...prev,
                    StartupName: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Founded Date:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={FoundedDate}
                  onChange={(e) => setLocalBasicInformation(prev => ({
                    ...prev,
                    FoundedDate: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Logo:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Logo}
                  onChange={(e) => setLocalBasicInformation(prev => ({
                    ...prev,
                    Logo: e.target.value
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Headquater:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={HeadQuaters}
                  onChange={(e) => setLocalBasicInformation(prev => ({
                    ...prev,
                    HeadQuaters: e.target.value
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

export default BasicInformationEditor
