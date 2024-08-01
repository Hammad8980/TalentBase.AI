import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faPencil, faBook, faFile, faCircleMinus, faMessage, faCalendarDays, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './studentDashBoard.css';

function Sidebar() {
  return (
    <div className="stu-dash-sidebar-main PrimaryColor2">
      <table className="stu-dash-sidebar PrimaryColor1">
        <tbody className="stu-dash-table-body">
          <tr>
            <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faTableColumns} /></td>
            <td className="stu-dash-sidebar-item">Dashboard</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faPencil} /></td>
            <td className="stu-dash-sidebar-item">Startup</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faBook} /></td>
            <td className="stu-dash-sidebar-item">Blogs</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faFile} /></td>
            <td className="stu-dash-sidebar-item">Learning Path</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faCircleMinus} /></td>
            <td className="stu-dash-sidebar-item">Services</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faMessage} /></td>
            <td className="stu-dash-sidebar-item">Notice</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faCalendarDays} /></td>
            <td className="stu-dash-sidebar-item">Schedule</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faRightFromBracket} /></td>
            <td className="stu-dash-sidebar-item">Logout</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default Sidebar;
