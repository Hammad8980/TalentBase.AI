import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import styles from './SidebarContainer.module.css';


const NavBar = ({ icon, text }) => {
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
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="menuIcon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49b687c8529cd8566cb72fd16bc1563eb06fd07058bdc4f9fe453d2b6dc6a1e8?apiKey=168c23e5e966425abe0e4b54edde3b42&"></img>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" type="button">Action</button></li>
                <li><button class="dropdown-item" type="button">Another action</button></li>
                <li><button class="dropdown-item" type="button">Something else here</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
