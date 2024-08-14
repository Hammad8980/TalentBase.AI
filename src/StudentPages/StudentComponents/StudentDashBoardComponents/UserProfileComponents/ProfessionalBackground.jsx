import '../StudentDashboard.css';

function ProfessionalBackground() {
  const CurrentPosition = 'Manager';
  const EducationalBackground = 'BSCS';
  const Skills = 'Something';
  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Professional Background</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Current Position:</td>
              <td>{CurrentPosition}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>EducationalBackground:</td>
              <td>{EducationalBackground}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Skills:</td>
              <td>{Skills}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfessionalBackground;
