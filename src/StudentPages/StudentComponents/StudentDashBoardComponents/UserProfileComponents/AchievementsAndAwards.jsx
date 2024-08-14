import '../StudentDashboard.css';

function AchievementsAndAwards() {
  const Achievements = 'Lots of.....';
  const Awards = 'Gold Medal';
  return (
    <div className="student-portal-main-container">
      <div className='student-portal-subdiv1 PrimaryColor1'><span>Achievements & Awards</span></div>
      <div className='student-portal-subdiv2'>
        <table className="student-portal-table">
          <tbody>
            <tr>
              <td className='student-portal-table-td-heading'>Achevements:</td>
              <td>{Achievements}</td>
            </tr>
            <tr>
              <td className='student-portal-table-td-heading'>Awards:</td>
              <td>{Awards}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AchievementsAndAwards;
