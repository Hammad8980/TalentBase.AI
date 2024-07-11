import React from 'react';
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

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>TESTIMONIALS</h2>
      <p className={styles.sectionDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Carousel>
        {testimonials.reduce((acc, testimonial, index, array) => {
          if (index % 2 === 0) {
            acc.push(array.slice(index, index + 2));
          }
          return acc;
        }, []).map((pair, index) => (
          <Carousel.Item key={index}>
            <div className={styles.testimonialContainer}>
              {pair.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      
    </section>
  );
};

export default Testimonials;