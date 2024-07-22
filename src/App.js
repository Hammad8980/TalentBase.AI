import Navbar from './Components/NavbarPage/NavBar';
import Home from './Components/HomePage/Home';
import Enterprise from './Components/EnterprisePage/Enterprise';
import Students from './Components/Students';
import About from './Components/About';
import Blog from './Components/BlogPage/Blog';
import TNSFS from './Components/TNSFS';
import Contact from './Components/ContactPage/Contact';
import SignUp from './SignUpPage/SignUp';
import Missing from './Components/Missing';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tnsfs" element={<TNSFS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>

  );
}

export default App;
