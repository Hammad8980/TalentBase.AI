import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import { Carousel } from 'react-bootstrap';

const TestimonialCard = ({ content, author }) => (
  <div className={styles.testimonialCard}>
    <p className={styles.testimonialContent}>{content}</p>
    <div className={styles.testimonialAuthor}>
      <div className={styles.authorAvatar} />
      <span className={styles.authorName}>{author}</span>
    </div>
  </div>
);

const Testimonials = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  const testimonials = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Mike"
    },
    {
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane"
    },
    {
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "John"
    },
    {
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Doe"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth <= 620 ? 1 : 2);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>TESTIMONIALS</h2>
      <p className={styles.sectionDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Carousel>
        {testimonials.reduce((acc, testimonial, index, array) => {
          if (index % itemsPerSlide === 0) {
            acc.push(array.slice(index, index + itemsPerSlide));
          }
          return acc;
        }, []).map((pair, index) => (
          <Carousel.Item key={index}>
            <div className={styles.testimonialContainer}>
              {pair.map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
