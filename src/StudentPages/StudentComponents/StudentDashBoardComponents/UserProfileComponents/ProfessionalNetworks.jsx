import '../StudentDashboard.css';

function ProfessionalNetworks() {
  const Mentors = 'Ali Doe';
  const Association = 'Something';
  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Professional Networks</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Mentors:</td>
              <td>{Mentors}</td>
            </tr>
          </tbody>
        </table>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Association:</td>
              <td>{Association}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfessionalNetworks;
