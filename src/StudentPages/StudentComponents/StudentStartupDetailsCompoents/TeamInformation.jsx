import React from 'react'

const TeamInformation = () => {
    const FoundingTeam = "fake data is fake";
    const EmployeeCount = "fake data is fake";
    const AdvisoryBoard = "fake data is fake";
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Team Information</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Founding Team:</td>
                            <td>{FoundingTeam}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Employee Count:</td>
                            <td>{EmployeeCount}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Advisory Board:</td>
                            <td>{AdvisoryBoard}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TeamInformation
