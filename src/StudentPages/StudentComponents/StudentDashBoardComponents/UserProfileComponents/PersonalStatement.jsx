import '../StudentDashboard.css';

function PersonalStatement ({personalStatement}) {
  if (!personalStatement) return <div>No personal information available.</div>;
  const {Goals = "Ø Undefined", Visions = "Ø Undefined", Biography = "Ø Undefined"} = personalStatement;
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
