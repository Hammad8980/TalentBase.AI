import React from 'react';
import styles from './AdminDashboard.module.css';

function StatItem({ title }) {
  return (
    <div className={styles.statItem}>
      {title.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          {word}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default StatItem;