import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const DocumentAndResourcesEditor = () => {
  const { localDocumentAndResources, setLocalDocumentAndResources } = useContext(StudentDataEditoruseContext);
  const {
    PitchDeck = "",
    BusinessPlan = "",
    Videos = ""
  } = localDocumentAndResources;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Document & Resources</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Pitch Deck:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={PitchDeck}
                  onChange={(e) => setLocalDocumentAndResources(prev => ({
                    ...prev,
                    PitchDeck: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Business Plan:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={BusinessPlan}
                  onChange={(e) => setLocalDocumentAndResources(prev => ({
                    ...prev,
                    BusinessPlan: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Videos:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Videos}
                  onChange={(e) => setLocalDocumentAndResources(prev => ({
                    ...prev,
                    Videos: e.target.value
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

export default DocumentAndResourcesEditor;
