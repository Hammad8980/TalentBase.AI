import React from 'react'

const MediaAndPress = () => {
    const PressReleases = "fake data is fake";
    const MediaCoverage = "fake data is fake";
    const AwardsAndRecognition = "fake data is fake";
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Media & Press</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Press Releases:</td>
                            <td>{PressReleases}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Media Coverage:</td>
                            <td>{MediaCoverage}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Awards And Recognition:</td>
                            <td>{AwardsAndRecognition}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MediaAndPress
