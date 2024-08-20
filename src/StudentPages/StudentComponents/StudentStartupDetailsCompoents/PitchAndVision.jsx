import React from 'react'

const PitchAndVision = () => {
    const ElevatorPitch = "fake data is fake";
    const VisionStatement = "fake data is fake";
    const UseOfFunds = "fake data is fake";
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Pitch & Vision</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Elevator Pitch:</td>
                            <td>{ElevatorPitch}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Vision Statement:</td>
                            <td>{VisionStatement}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Use of Funds:</td>
                            <td>{UseOfFunds}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PitchAndVision
