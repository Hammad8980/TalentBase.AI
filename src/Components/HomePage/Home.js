import React from 'react'
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Testimonials from './Testimonials/Testimonials';
import Blog from '../BlogPage/Blog';
import Newsletter from './NewsLetter/NewsLetter';
import Footer from './Footer/Footer';
import 'animate.css';
import {useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const moveToSignUp = () => {
    navigate('/Signup');
  };
  return (
    <>
      <main className="App-main">
        <h1 className='animate__animated animate__fadeInDown'>Let us Build Brands<br></br> together shall we?</h1>
        <div className="App-buttons animate__animated animate__fadeInDown">
          <button className="start-button" onClick={moveToSignUp  }>GET STARTED</button>
          <span>or</span>
          <a href="/video">Watch video</a>
        </div>
      </main>
      <WhatWeDo />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </>


  )
}

export default Home