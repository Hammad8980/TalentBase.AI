
const FoundingTeam = ({foundingTeam}) => {

    const {
        MarketOpportunity = "Ø Undefined",
        CompetitiveLandscape = "Ø Undefined"
    } = foundingTeam;

    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Founding Team</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Market Oppurtunity:</td>
                            <td>{MarketOpportunity}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Competitive Landscape:</td>
                            <td>{CompetitiveLandscape}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FoundingTeam
