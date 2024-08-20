import React from 'react'
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Testimonials from './Testimonials/Testimonials';
import Blog from '../BlogPage/Blog';
import Newsletter from './NewsLetter/NewsLetter';
import Footer from './Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    navigate('/signup'); 
  };
  return (
    <>
      <main className="App-main">
      <h1>Let us Build Brands<br></br> together shall we?</h1>
      <div className="App-buttons">
        <button className="start-button" onClick={handleGetStartedClick}>GET STARTED</button>
        <span>or</span>
        <a href="/video">Watch video</a>
        <span>or</span>
        <Link to={"/adminDashboard"}>Admin</Link>
      </div>
      </main>
      <WhatWeDo />
      <Testimonials />
      <Blog/>
      <Newsletter />
      <Footer />
    </>
    
    
  )
}

export default Home