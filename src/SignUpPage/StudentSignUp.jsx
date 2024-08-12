import React, { useState, useEffect, useRef } from 'react';
import "./SignUp.css";
import axios from '../API/axios';
const SignUp_URL = '/signup'

const StudentSignUp = () => {
  const userRef = useRef();

  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState(false);
  const [AcademicInstitution, setAcademicInstitution] = useState('');
  const [LastAcademicDegree, setLastAcademicDegree] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SignUp_URL,
        JSON.stringify({ UserName, Password, AcademicInstitution, LastAcademicDegree }),
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      console.log(JSON.stringify(response))
    }
    catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setMatchPassword(Password === ConfirmPassword);
  }, [ConfirmPassword, Password]);

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="SignUpForm">
        <div className="FormSubDiv">
          <label htmlFor="name" className="OffScreen">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="SignUpInput"
            ref={userRef}
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
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
            value={Password}
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
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className={`cross-icon ${!matchPassword && ConfirmPassword ? 'visible' : ''}`}>&#x2716;</span>
          </div>
        </div>
        <div className="FormSubDiv">
          <label htmlFor="institution" className="OffScreen">Academic Institution</label>
          <input
            type="text"
            id="institution"
            placeholder="Academic Institution"
            className="SignUpInput"
            value={AcademicInstitution}
            onChange={(e) => setAcademicInstitution(e.target.value)}
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
            value={LastAcademicDegree}
            onChange={(e) => setLastAcademicDegree(e.target.value)}
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

export default StudentSignUp;