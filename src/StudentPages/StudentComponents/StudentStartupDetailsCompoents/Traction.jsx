import React from 'react'

const Traction = () => {
    const Keymetrics = "fake data is fake";
    const CustomerTestemonials = "fake data is fake";
    const Milestones = "fake data is fake";
    const UserGrowth = "fake data is fake";
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Traction</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Keymetrics:</td>
                            <td>{Keymetrics}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Customer Testemonials:</td>
                            <td>{CustomerTestemonials}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Milestones:</td>
                            <td>{Milestones}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>User Growth:</td>
                            <td>{UserGrowth}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Traction
