import React from 'react';
import './Startups.css';

const FeaturedStartups = () => {
  return (
    <>
    <div className="featured-startups-container PrimaryFont">
      <div className="featured-startups PrimaryColor1">
        <h2>Featured Startups</h2>
        
        <div className="startups-container">
          <div className="startup-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
          <div className="startup-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
          <div className="startup-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
        </div>
        
        <button className="view-all-button">View All</button>
      </div>
    </div>
    <div className="featured-startups-container PrimaryFont">
      <div className="featured-startups PrimaryColor1">
        <h2>Featured Founders</h2>
        <div className="startups-container">
          <div className="startup-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
          <div className="startup-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
          <div className="startup-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
        </div>
        <button className="view-all-button">View All</button>
      </div>
    </div>
    </>
  );
};

export default FeaturedStartups;
