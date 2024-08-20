import React from 'react'

const BasicInformation = () => {
    const StartupName = "my Name";
    const FoundedDate = "2/8/2001";
    const Logo = "my logo";
    const HeadQuaters = "the headquater";
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Basic Information</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Startup Name:</td>
                            <td>{StartupName}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Founded Date:</td>
                            <td>{FoundedDate}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Logo:</td>
                            <td>{Logo}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Headquater:</td>
                            <td>{HeadQuaters}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BasicInformation
