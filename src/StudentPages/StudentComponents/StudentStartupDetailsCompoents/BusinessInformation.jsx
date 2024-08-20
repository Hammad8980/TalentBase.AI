import React from 'react'

const BusinessInformation = () => {
    const Industry = "fake data is fake";
    const BusinessModel = "fake data is fake";
    const Products = "fake data is fake";
    const TargetMarket = "fake data is fake";
    const Picture = "fake data is fake";    
    return (
        <div className="student-portal-main-container">
            <div className='student-portal-subdiv1 PrimaryColor1'><span>Business Information</span></div>
            <div className='student-portal-subdiv2'>
                <table className="student-portal-table">
                    <tbody>
                        <tr>
                            <td className='student-portal-table-td-heading'>Industry:</td>
                            <td>{Industry}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Business Model:</td>
                            <td>{BusinessModel}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Products:</td>
                            <td>{Products}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Target Market:</td>
                            <td>{TargetMarket}</td>
                        </tr>
                        <tr>
                            <td className='student-portal-table-td-heading'>Picture:</td>
                            <td>{Picture}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BusinessInformation
