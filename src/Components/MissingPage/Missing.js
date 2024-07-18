import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import './NotFound.css'; // We'll add custom CSS here


const NotFound = () => {
  return (
    <div className="not-found-container animate__animated animate__fadeIn">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go Home</Link>
    </div>
  );
};

export default NotFound;
