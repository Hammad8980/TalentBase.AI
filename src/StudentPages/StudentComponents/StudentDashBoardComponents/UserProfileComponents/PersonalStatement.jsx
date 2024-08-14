import '../StudentDashboard.css';

function PersonalStatement() {
  const Goals = 'These are my goals';
  const Visions = 'This is my vision';
  const Biography = 'This is my biagraphy';
  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Personal Statement</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Goals:</td>
              <td>{Goals}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Visions:</td>
              <td>{Visions}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Biography:</td>
              <td>{Biography}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalStatement;
