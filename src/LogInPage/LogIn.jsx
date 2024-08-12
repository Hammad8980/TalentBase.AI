import React, { useState, useEffect, useRef } from 'react';
import UseAuth from '../Hooks/useAuth';
import './LogIn.css';
import userData from '../Data';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { auth, setAuth } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const userRef = useRef();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        userRef.current.focus();
    }, []);
    
    const handleSubmit = (e) => {
        console.log("haha")
        e.preventDefault();
        console.log("hehe")
        const foundUser = userData.users.find(user => user.Name === email && user.Password === password);
        if (foundUser) {
            console.log('Login successful!');
            console.log(foundUser);
            const role = [foundUser.Role];
            const token = foundUser.Token;
            setAuth({ email, password, role, token });
            console.log(auth);
            console.log(role);
            const from = location.state?.from?.pathname || "/";
            console.log(from)
            navigate(from, { replace: true });
            // Handle successful login (e.g., redirect to another page)
        } else {
            console.log('Invalid email or password.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="Avatar"></div>
                <h2 className="LoginHeader">Log into your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="LoginFormSubDiv">
                        <label htmlFor="email" className="off-screen">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="LoginInput"
                            ref={userRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="LoginFormSubDiv">
                        <label htmlFor="password" className="off-screen">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="LoginInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" className="login-button">LOGIN</button>
                </form>
                <div>
                    <span>Don't have an account? <a className="SignUpLink" href="/signup">Sign up</a></span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
