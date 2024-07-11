import React from 'react'
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Testimonials from './Testimonials/Testimonials';
import Blog from '../BlogPage/Blog';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
      <main className="App-main">
      <h1>Let us Build Brands<br></br> together shall we?</h1>
      <div className="App-buttons">
        <button className="start-button">GET STARTED</button>
        <span>or</span>
        <a href="/video">Watch video</a>
      </div>
      </main>
      <WhatWeDo />
      <Testimonials />
      <Blog/>
      <Footer />
    </>
    
    
  )
}

export default Home