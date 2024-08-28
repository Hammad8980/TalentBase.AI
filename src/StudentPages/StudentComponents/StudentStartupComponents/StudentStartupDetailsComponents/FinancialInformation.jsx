

const FinancialInformation = ({financialInformation}) => {

    const {
        FundingStage = "Ø Undefined",
        TotalFundingRaised = "Ø Undefined",
        Revenue = "Ø Undefined",
        Investors = "Ø Undefined"
    } = financialInformation;

    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Financial Information</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Funding Stage:</td>
                            <td>{FundingStage}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Total Funding Raised:</td>
                            <td>{TotalFundingRaised}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Revenue:</td>
                            <td>{Revenue}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Investors:</td>
                            <td>{Investors}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FinancialInformation
