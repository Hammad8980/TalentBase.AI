import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const servicesData = [
  {
    title: "LEARNING PLATFORM",
    description: "A degree program's learning stream is organized into various modules, each represented in three different levels, categorized as basic, intermediate, and advanced.",
    longDescription: "Upon completion of each module, students receive a badge of achievement. At the successful completion of the learning path, students are awarded a specialization in their chosen field, marking their proficiency and readiness for advanced professional opportunities.",
    buttonText: "Request for Services",
    imageSrc: "https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
  },
  {
    title: "CERTIFICATIONS AND WORKSHOPS",
    description: "This category includes courses and workshops across different technical and business domains.",
    longDescription: "Certificates are awarded aiming targeted skill and concentrated knowledge, designed for career enhancement in marketing domains.",
    buttonText: "Request for Services",
    imageSrc: "https://www.shutterstock.com/image-photo/business-work-assessment-certificate-concept-600nw-2305273009.jpg"
  },
  {
    title: "BUSINESS DEVELOPMENT SERVICES",
    description: "Marketing campaigns are organized to promote the products and services, through content writing and creative designs to engage and persuade the target audience.",
    longDescription: "Different application softwares are created through Web development. Digital marketing strategies for advertisements drive website traffic and connect to the audience. The search engine optimization ranks the website to a higher rank.",
    buttonText: "Request for Services",
    imageSrc: "./business-development-services.jpeg"
  },
  {
    title: "PODCAST SERVICES",
    description: "Podcast services offer comprehensive assistance, requiring cameras and microphones for optimal recording.",
    longDescription: "These services include media coverage through videos, reels, and pictures, as well as professional podcast recording. Our professional hosts are available for both formal and informal settings. Editing services are available to ensure high-quality content.",
    buttonText: "Request for Services",
    imageSrc: "./podcast2.jpg"
  }
];

const Services = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const handleCardClick = (index) => {
    setExpandedCardIndex(index);
  }
  const handleBackClick = () => {
    setExpandedCardIndex(null);
  }
  return (
    <main className={styles.servicesContainer}>
      <div className={styles.servicesWrapper}>
        <h1 className={styles.servicesTitle}>OUR SERVICES</h1>
        
        {
          expandedCardIndex === null ? (
            servicesData.map((service, index) => (
              <ServiceCard 
              key={index}
              {...service}
              onClick={() => handleCardClick(index)}
              isExpanded={false} />
            ))
          ) : (
            <ServiceCard 
            {...servicesData[expandedCardIndex]} 
            onBackClick={handleBackClick} 
            isExpanded={true}
          />
          )}
      </div>
    </main>
  );
};

export default Services;