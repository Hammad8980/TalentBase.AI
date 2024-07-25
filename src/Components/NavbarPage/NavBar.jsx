import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ icon, text }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const popover = (
    <Popover id="avatar-popover">
      <Popover.Body>
        <div className="popover-content">
          <div className="popover-header">
            <div className="avatar"></div>
            <span className="username">JOHN DOE</span>
          </div>
          <div className="popover-body">
            <div className="popover-item">Dashboard</div>
            <div className="popover-item">Learning Path</div>
            <div className="popover-item">Privacy Policy</div>
            <div className="popover-item">About</div>
            <div className="popover-item">Settings</div>
            <div className="popover-item">Logout</div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <nav className="App-header navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TALENTBASE.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/enterprise">
              Enterprise
            </Link>
            <Link className="nav-link" to="/students">
              Students
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/tnsfs">
              TNSFS
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <div className="avatar-popover-container">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <div className="avatar-icon" onClick={handleToggle}></div>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
