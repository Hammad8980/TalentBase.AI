import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMessage,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ icon, text }) => {
  const [show, setShow] = useState(false);
  const [showSm, setShowSm] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleToggleSm = () => setShowSm(!showSm);

  const closePopover = () => setShow(false);

  const popover = (
    <Popover id="avatar-popover">
      <Popover.Body>
        <div className="popover-content">
          <div className="popover-header">
            <div className="avatar"></div>
            <span className="username">JOHN DOE</span>
          </div>
          <div className="popover-body">
            <div className="popover-item" onClick={closePopover}>
              <Link to="/studentDashboard">
                <svg
                  width="35"
                  height="25"
                  viewBox="0 0 25 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4507 1.59235H8.8881C5.03267 1.59235 1.90723 4.70923 1.90723 8.5541V16.096C1.90723 19.9409 5.03267 23.0577 8.8881 23.0577H16.4507C20.3061 23.0577 23.4316 19.9409 23.4316 16.096V8.5541C23.4316 4.70923 20.3061 1.59235 16.4507 1.59235Z"
                    stroke="grey"
                    stroke-width="2"
                  />
                  <path
                    d="M7.63379 17.2238V11.3075M12.8124 17.2238V7.4263M17.7049 17.2238V9.79561"
                    stroke="grey"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Dashboard
              </Link>
            </div>
            <hr />
            <div className="popover-item" onClick={closePopover}>
              <svg
                width="35"
                height="23"
                viewBox="0 0 35 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6776 0.855713L0.0510254 8.812L5.36978 11.7028V19.6591L14.6776 24.7246L23.9854 19.6591V11.7028L26.6448 10.2574V19.4204H29.3042V8.812L14.6776 0.855713ZM23.7461 8.812L14.6776 13.7449L5.60913 8.812L14.6776 3.8791L23.7461 8.812ZM21.3261 18.0943L14.6776 21.7012L8.02916 18.0943V13.1482L14.6776 16.7683L21.3261 13.1482V18.0943Z"
                  fill="grey"
                />
              </svg>
              Learning Path
            </div>
            <div className="popover-item" onClick={closePopover}>
              <svg
                width="33"
                height="23"
                viewBox="0 0 23 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.634 0.769653L0.935303 5.52172V12.6498C0.935303 19.2433 5.50008 25.4091 11.634 26.906C17.7679 25.4091 22.3327 19.2433 22.3327 12.6498V5.52172L11.634 0.769653ZM19.9552 12.6498C19.9552 18.0197 16.4127 22.9737 11.634 24.4468C6.85525 22.9737 3.31279 18.0197 3.31279 12.6498V7.06615L11.634 3.37141L19.9552 7.06615V12.6498ZM6.17766 13.3508L4.50153 15.0259L9.25651 19.7779L18.7665 10.2738L17.0903 8.58681L9.25651 16.4158L6.17766 13.3508Z"
                  fill="grey"
                />
              </svg>
              Privacy Policy
            </div>
            <div className="popover-item" onClick={closePopover}>
              About
            </div>
            <div className="popover-item" onClick={closePopover}>
              Settings
            </div>
            <div className="popover-item" onClick={closePopover}>
              Logout
            </div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <nav className="App-header navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TALENTBASE.
        </a>
        <div>
          <div className="d-flex   " style={{ gap: 0, position: "relative" }}>
            <div className="avatar-popover-container  relative">
              <div className="larger-none">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom-start"
                  overlay={popover}
                  show={showSm}
                  onToggle={handleToggleSm}
                >
                  <FontAwesomeIcon
                    className="avatar-icon "
                    icon={faUser}
                    onClick={handleToggleSm}
                  />
                </OverlayTrigger>
              </div>
            </div>
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
              to="/"
              onClick={closePopover}
            >
              Home
            </Link>
            <Link className="nav-link" to="/enterprise" onClick={closePopover}>
              Enterprise
            </Link>
            <Link className="nav-link" to="/students" onClick={closePopover}>
              Students
            </Link>
            <Link className="nav-link" to="/about" onClick={closePopover}>
              About
            </Link>
            <Link className="nav-link" to="/blog" onClick={closePopover}>
              Blog
            </Link>
            <Link className="nav-link" to="/tnsfs" onClick={closePopover}>
              TNSFS
            </Link>
            <Link className="nav-link" to="/contact" onClick={closePopover}>
              Contact
            </Link>
          </div>

          <div className="avatar-popover-container md-none">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
              show={show}
              onToggle={handleToggle}
            >
              <FontAwesomeIcon
                className="avatar-icon"
                icon={faUser}
                onClick={handleToggle}
              />
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
