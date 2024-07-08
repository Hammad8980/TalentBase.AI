import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="App-nav">
                <ul className='navbar ms-auto'>
                    <a class="navbar-brand" href="#">TalentBase.Ai</a>
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/enterprise">Enterprise</Link>
                    <Link className="nav-link" to="/students">Students</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/blog">Blog</Link>
                    <Link className="nav-link" to="/tnsfs">TNSFS</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar