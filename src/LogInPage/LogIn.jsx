import React, { useState, useEffect, useRef } from 'react';
import UseAuth from '../Hooks/useAuth';
import './LogIn.css';
import axios from '../API/axios';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { setAuth } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const userRef = useRef();
    const URL = '/users/login';
    let from = null;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        console.log("haha")
        e.preventDefault();
        console.log("hehe")
        try {
            const foundUser = await axios.post(
                URL,
                JSON.stringify({ email, password }),
                {
                    headers: { "Content-Type": 'application/json' }
                }
            );
            const role = foundUser?.data?.role;
            if (role) {
                await setAuth({ role });
                localStorage.setItem('userRole', role);
                if (role === 'student') {
                     from = location.state?.from?.pathname || "/studentdashboard";
                }
                console.log(from)
                navigate(from, { replace: true });
            } else {
                console.log("No Role Found");
            }
        } catch (err) {
            console.log(err);
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
