import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServiceCard.module.css';


const ServiceCard = ({ title, description, longDescription, buttonText, imageSrc, onClick, isExpanded, onBackClick }) => {
  const navigate = useNavigate();
  function handleClick(event) {
    event.stopPropagation();
    navigate("/contact");
  }
  const [isMobileView, setIsMobileView] = useState(window.innerWidth > 998);
  const [isMobileViewExpanded, setIsMobileViewExpanded] = useState(window.innerWidth > 998);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth > 998);
      setIsMobileViewExpanded(window.innerWidth > 998);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className={`${styles.serviceCard} ${isExpanded ? styles.expanded : ''}`} 
      onClick={isExpanded ? null : onClick}
    > 
      {(!isExpanded && !isMobileView || !isMobileViewExpanded)&& (
        <div className={styles.contentWrapper}>
          <img src={imageSrc} className={styles.imageWrapper} />
        </div>
      )}
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        { isExpanded && <p className={styles.longDescription}>{longDescription}</p> }
        {isExpanded ? (
          <>
            <button className={styles.ctaButton} onClick={handleClick}>
            <span>{buttonText}</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ec1962519cd7d1ca44565f2471918f29185cc10bc407da2bd1ab59fc55d4b4?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42" alt="" className={styles.buttonIcon} />
            </button>
            <button className={styles.backButton} onClick={onBackClick}>
            Back
            </button>
          </>
        ) : (
          <button className={styles.ctaButton} onClick={handleClick}>
            <span>{buttonText}</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ec1962519cd7d1ca44565f2471918f29185cc10bc407da2bd1ab59fc55d4b4?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42" alt="" className={styles.buttonIcon} />
          </button>
        )}
      </div>
      {(isMobileView && isExpanded || isMobileViewExpanded) && (
        <div className={styles.contentWrapper}>
          <img src={imageSrc} className={styles.imageWrapper} alt={title} />
        </div>
      )}
    </section>
  );
};

export default ServiceCard;
