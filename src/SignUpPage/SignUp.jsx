import React, { useState, useEffect, useRef } from 'react';
import "./SignUp.css";

const SignUp = () => {
  const userRef = useRef();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState(false);
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(matchPassword)
    console.log(name)
    console.log(degree)
    console.log(!institution)
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setMatchPassword(password === confirmPassword);
  }, [confirmPassword, password]);

  return (
    <div className="signup-container">
      <div className="profile-pic"><img className='ProfileImg' src='Bunny.jpg' alt='A bunnyyy' /></div>
      <h2 className="SignUpHeading">Sign into your account</h2>
      <form onSubmit={handleSubmit} className="SignUpForm">
        <div className="FormSubDiv">
          <label htmlFor="name" className="OffScreen">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="SignUpInput"
            ref={userRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="FormSubDiv">
          <label htmlFor="password" className="OffScreen">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="SignUpInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="FormSubDiv">
          <label htmlFor="confirmPassword" className="OffScreen">Confirm Password</label>
          <div className="input-container">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="SignUpInput"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className={`cross-icon ${!matchPassword && confirmPassword ? 'visible' : ''}`}>&#x2716;</span>
          </div>
        </div>
        <div className="FormSubDiv">
          <label htmlFor="institution" className="OffScreen">Academic Institution</label>
          <input
            type="text"
            id="institution"
            placeholder="Academic Institution"
            className="SignUpInput"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />
        </div>
        <div className="FormSubDiv">
          <label htmlFor="degree" className="OffScreen">Last Academic Degree</label>
          <input
            type="text"
            id="degree"
            placeholder="Last Academic Degree"
            className="SignUpInput"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </div>
        <button className="SignUpButton" type="submit">SIGN UP</button>
      </form>
      <div>
        <span>Already Register? <a className="LogInLink" href="/login">Log In</a></span>
      </div>
    </div>
  );
};

export default SignUp;