import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="App-header navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TALENTBASE<em>. AI</em></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/enterprise">Enterprise</Link>
            <Link className="nav-link" to="/students">Students</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/tnsfs">TNSFS</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default NavBar