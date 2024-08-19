import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, longDescription, buttonText, imageSrc }) => {
  return (
    <section className={styles.serviceCard}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.longDescription}>{longDescription}</p>
        <button className={styles.ctaButton}>
          <span>{buttonText}</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ec1962519cd7d1ca44565f2471918f29185cc10bc407da2bd1ab59fc55d4b4?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42" alt="" className={styles.buttonIcon} />
        </button>
      </div>
      <div className={styles.imageWrapper} />
    </section>
  );
};

export default ServiceCard;