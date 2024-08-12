import React from 'react';
import './NewsLetter.css';
const Newsletter = () => {
    return (
        <div className="newsletter-page PrimaryFont PrimaryColor1" style={{marginTop: '3%'}}>
            <div className="newsletter-container">
                <h2 className="newsletter-header">LETS WORK TOGETHER</h2>
                <h1 className="newsletter-title">Subscribe to our Newsletter</h1>
                <p className="newsletter-text">
                    Lorem ipsum is a placeholder text commonly used in publishing and graphic design to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
                <button className="newsletter-button SecondaryColor">GET IN TOUCH</button>
            </div>
        </div>
    );
};

export default Newsletter;