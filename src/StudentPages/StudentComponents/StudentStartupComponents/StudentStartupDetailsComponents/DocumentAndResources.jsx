
const DocumentAndResources = ({documentAndResources}) => {
    const {
        PitchDeck = "Ø Undefined",
        BusinessPlan = "Ø Undefined",
        Videos = "Ø Undefined"
    } = documentAndResources;
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Document & Resources</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Pitch Deck:</td>
                            <td>{PitchDeck}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Business Plan:</td>
                            <td>{BusinessPlan}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Videos:</td>
                            <td><a href={Videos} target="_blank" rel="noopener noreferrer">{Videos}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DocumentAndResources
