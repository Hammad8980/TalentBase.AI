import '../StudentDashboard.css';

function AcademicBackground ({academicBackground}) {
  const {YearOfCompletion = "Ø Undefined", CurrentEducation = "Ø Undefined",  Degree = "Ø Undefined"} = academicBackground;
  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Academic Background</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Year of Completion:</td>
              <td>{YearOfCompletion}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Current Education:</td>
              <td>{CurrentEducation}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Degree:</td>
              <td>{Degree}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AcademicBackground;
