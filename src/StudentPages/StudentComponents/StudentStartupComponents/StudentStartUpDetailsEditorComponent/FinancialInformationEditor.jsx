import { useContext } from 'react';
import { StudentDataEditoruseContext } from "../../../StudentDataProvider/StudentDataEditorUseContext";

const FinancialInformationEditor = () => {
  const { localFinancialInformation, setLocalFinancialInformation } = useContext(StudentDataEditoruseContext);
  const {
    FundingStage = "",
    TotalFundingRaised = "",
    Revenue = "",
    Investors = ""
  } = localFinancialInformation;

  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Financial Information</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Funding Stage:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={FundingStage}
                  onChange={(e) => setLocalFinancialInformation(prev => ({
                    ...prev,
                    FundingStage: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Total Funding Raised:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={TotalFundingRaised}
                  onChange={(e) => setLocalFinancialInformation(prev => ({
                    ...prev,
                    TotalFundingRaised: e.target.value
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Revenue:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Revenue}
                  onChange={(e) => setLocalFinancialInformation(prev => ({
                    ...prev,
                    Revenue: e.target.value
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Investors:</td>
              <td>
                <input
                  type="text"
                  placeholder="Ø Undefined"
                  value={Investors}
                  onChange={(e) => setLocalFinancialInformation(prev => ({
                    ...prev,
                    Investors: e.target.value
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

export default FinancialInformationEditor;
