import '../StudentDashboard.css';

function OpenToWork() {
    const Jobs = true;
    const Projects = false;
    const Internships = true;
    const Funding = false;
    const Acquisition = true;
    const Collaborations = false;
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Open To Work</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Jobs:</td>
                            <td><input type="checkbox" checked={Jobs} /></td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Projects:</td>
                            <td><input type="checkbox" checked={Projects} /></td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Internships:</td>
                            <td><input type="checkbox" checked={Internships} /></td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Funding:</td>
                            <td><input type="checkbox" checked={Funding} /></td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Acquisition:</td>
                            <td><input type="checkbox" checked={Acquisition} /></td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Collaboration:</td>
                            <td><input type="checkbox" checked={Collaborations} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OpenToWork;
