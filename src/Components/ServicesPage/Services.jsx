import React from 'react'
import './Services.css';
const Services = () => {
  return (
    <div className="featured-services-container PrimaryFont">
      <div className="featured-services PrimaryColor1">
        <h2>Featured Services</h2>
        <div className="services-container">
          <div className="services-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
          <div className="services-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
          <div className="services-card">
            <div className="image-placeholder PrimaryColor2"></div>
            <p>lorem ipsum</p>
          </div>
        </div>
        <button className="view-all-button">View All</button>
      </div>
    </div>
  )
}

export default Services