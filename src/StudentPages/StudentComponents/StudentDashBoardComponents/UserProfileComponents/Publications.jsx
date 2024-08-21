import '../StudentDashboard.css';

function Publications ({publications}) {
    if (!publications) return <div>No personal information available.</div>;
    const {Articles = "Ø Undefined", Interviews = "Ø Undefined"} = publications;
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Publications</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Articles:</td>
                            <td><a href={Articles} target="_blank" rel="noopener noreferrer">{publications.Articles}</a></td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Interviews:</td>
                            <td>{Interviews}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Publications;
