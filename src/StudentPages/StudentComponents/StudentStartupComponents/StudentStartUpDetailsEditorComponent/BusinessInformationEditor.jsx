import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const BusinessInformationEditor = () => {
  const { localBusinessInformation, setLocalBusinessInformation } = useContext(StudentDataEditoruseContext);
  const {
    Industry = "",
    BusinessModel = "",
    Products = "",
    TargetMarket = "",
    Picture = ""
  } = localBusinessInformation;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Business Information</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Industry:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Industry}
                  onChange={(e) => setLocalBusinessInformation(prev => ({
                    ...prev,
                    Industry: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Business Model:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={BusinessModel}
                  onChange={(e) => setLocalBusinessInformation(prev => ({
                    ...prev,
                    BusinessModel: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Products:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Products}
                  onChange={(e) => setLocalBusinessInformation(prev => ({
                    ...prev,
                    Products: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Target Market:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={TargetMarket}
                  onChange={(e) => setLocalBusinessInformation(prev => ({
                    ...prev,
                    TargetMarket: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Picture:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Picture}
                  onChange={(e) => setLocalBusinessInformation(prev => ({
                    ...prev,
                    Picture: e.target.value
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

export default BusinessInformationEditor;
