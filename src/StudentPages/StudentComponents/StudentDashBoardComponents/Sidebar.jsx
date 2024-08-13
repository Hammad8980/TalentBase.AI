import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faPencil, faBook, faFile, faCircleMinus, faCalendarDays, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './StudentDashboard.css';

function Sidebar() {
  return (
    <div className="stu-dash-sidebar-main PrimaryColor1">
      <div className='stu-dash-div'>
        <span className="stu-dash-span">Student Portal</span>
      </div>
      <table className="stu-dash-sidebar">
        <tbody className="stu-dash-table-body">
          <tr className='stu-dash-table-tr'>
            <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faTableColumns} /></td>
            <td className="stu-dash-sidebar-item">Dashboard</td>
          </tr>
          <tr>
            <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faPencil} /></td>
            <td className="stu-dash-sidebar-item">Startup</td>
          </tr>
          <tr>
            <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faBook} /></td>
            <td className="stu-dash-sidebar-item">Blogs</td>
          </tr>
          <tr>
            <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faFile} /></td>
            <td className="stu-dash-sidebar-item">Learning Path</td>
          </tr>
          <tr>
            <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faCircleMinus} /></td>
            <td className="stu-dash-sidebar-item">Services</td>
          </tr>
          <tr>
            <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faCalendarDays} /></td>
            <td className="stu-dash-sidebar-item">Schedule</td>
          </tr>
          <div style={{ marginTop: '25%'}} >
            <tr >
              <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faRightFromBracket} /></td>
              <td className="stu-dash-sidebar-item">Logout</td>
            </tr>
          </div>

        </tbody>
      </table>
    </div>

  );
}

export default Sidebar;
