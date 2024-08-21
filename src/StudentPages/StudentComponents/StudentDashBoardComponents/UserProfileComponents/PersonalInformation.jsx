import '../StudentDashboard.css';

function PersonalInformation({personalInformation = {}}) {
  const { Name="Ø Undefined", Email="Ø Undefined", PhoneNumber="Ø Undefined", PersonalWebsite="Ø Undefined", LinkedIn="Ø Undefined", Location="Ø Undefined" } = personalInformation;
  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Personal Information</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Name:</td>
              <td>{Name}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Email:</td>
              <td>{Email}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Phone Number:</td>
              <td>{PhoneNumber}</td>
            </tr>
          </tbody>
        </table>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Personal Website:</td>
              <td><a href={PersonalWebsite} target="_blank" rel="noopener noreferrer">{PersonalWebsite}</a></td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>LinkedIn:</td>
              <td><a href={LinkedIn} target="_blank" rel="noopener noreferrer">{LinkedIn}</a></td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Location:</td>
              <td>{Location}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalInformation;
