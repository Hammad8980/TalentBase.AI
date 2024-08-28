import React, { useState, useEffect, useRef } from 'react';
import './SignUp.css';
import axios from '../API/axios';
const SignUp = () => {
  const userRef = useRef();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const URL = '/register';

  const [selectedRole, setSelectedRole] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setCheckEmail(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setMatchPassword(password === confirmPassword);
  }, [confirmPassword, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkEmail || !matchPassword) {
      setError('Please correct the errors in the form.');
      return;
    }

    try {
      const response = await axios.post('/users/register', {
        username: userName,
        email,
        password,
        role: selectedRole,
      });
      setSuccessMessage('Registration successful! Please log in.');
      setError('');
    } catch (e) {
      setError('Registration failed. Please try again.');
      console.log(e);
    }
    console.log("success");
  };

  return (
    <div className="signup-container">
      <div className="Avatar"></div>
      <h2 className="SignUpHeader">Sign up your account</h2>
      <form onSubmit={handleSubmit} className="SignUpForm">
        <div className="FormSubDiv">
          <label htmlFor="role" className="OffScreen">Select Role</label>
          <select
            className="SignUpInput"
            id="role"
            name="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            required
          >
            <option value="" disabled>Select Role</option>
            <option value="student">Student</option>
            <option value="academia">Academia</option>
            <option value="industry">Industry</option>
          </select>
        </div>
        <div className="FormSubDiv">
          <label htmlFor="name" className="OffScreen">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="SignUpInput"
            ref={userRef}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="FormSubDiv">
          <label htmlFor="email" className="OffScreen">Email</label>
          <div className="input-container">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="SignUpInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className={`cross-icon ${!checkEmail && email ? 'visible' : ''}`}>&#x2716;</span>
          </div>
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
        <button className="SignUpButton" type="submit">SIGN UP</button>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
      <div>
        <span>Already Registered? <a className="LogInLink" href="/login">Log In</a></span>
      </div>
    </div>
  );
};

export default SignUp;
