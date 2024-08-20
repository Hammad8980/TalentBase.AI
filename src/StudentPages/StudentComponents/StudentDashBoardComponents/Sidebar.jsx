import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faPencil, faBook, faFile, faCircleMinus, faCalendarDays, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

function Sidebar() {
  const [show, setShow] = useState(false);


  const closePopover = () => setShow(false);
  return (
    <>
      <div className="stu-dash-sidebar-main PrimaryColor1">
        <div className='stu-dash-div'>
          <span className="stu-dash-span">Student Portal</span>
        </div>
        <table className="stu-dash-sidebar">
          <tbody className="stu-dash-table-body">
            <tr className='stu-dash-table-tr'>
              <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faTableColumns} /></td>
              <td className="stu-dash-sidebar-item"><Link to={"/studentdashboard"}>DashBoard</Link></td>
            </tr>
            <tr>
              <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faPencil} /></td>
              <td className="stu-dash-sidebar-item"><Link to={"/studentstartups"}>Startup</Link></td>
            </tr>
            <tr>
              <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faBook} /></td>
              <td className="stu-dash-sidebar-item"><Link to={"/studentblogs"}>Blogs</Link></td>
            </tr>
            <tr>
              <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faFile} /></td>
              <td className="stu-dash-sidebar-item">Learning Path</td>
            </tr>
            <tr>
              <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faCircleMinus} /></td>
              <td className="stu-dash-sidebar-item"><Link to={"/studentservices"}>Services</Link></td>
            </tr>
            <tr>
              <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faCalendarDays} /></td>
              <td className="stu-dash-sidebar-item">Schedule</td>
            </tr>
            <div style={{ marginTop: '25%' }} >
              <tr >
                <td className="stu-dash-sidebar-icons"><FontAwesomeIcon icon={faRightFromBracket} /></td>
                <td className="stu-dash-sidebar-item"><Link to={"/"}>Logout</Link></td>
              </tr>
            </div>

          </tbody>
        </table>
      </div>
      <nav className="Stu-Nav-Main-Div navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="Stu-Nav-Heading" href="/studentDashboard">
            Student Portal
          </a>
          <div>
            <div className="d-flex   " style={{ gap: 0, position: "relative" }}>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="true"
                aria-label="Toggle navigation"
                onClick={closePopover}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link"
                aria-current="page"
                to="/studentDashBoard"
                onClick={closePopover}
              >
                DashBoard
              </Link>
              <Link className="nav-link" to="/studentstartups" onClick={closePopover}>
                Startup
              </Link>
              <Link className="nav-link" to="/blogsexplore" onClick={closePopover}>
                Blogs
              </Link>
            </div>


          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
