import React from "react";
import styles from './CategoryPage.module.css';
import { Link } from "react-router-dom";

function CategoryContent({onShow}) {
  return (
    <section className={styles.categoryContent}>
      <h2 className={styles.categoryType}>Student</h2>
      <div className={styles.categoryDetails}>
        <div className={styles.detailsWrapper}>
          <div className={styles.detailsColumn}>
            <div className={styles.detailsInfo}>
              <span className={styles.detailItem}>Adam</span>
              <div className={styles.separator} aria-hidden="true" />
              <span className={styles.detailItem}>UserId</span>
              <div className={styles.separator} aria-hidden="true" />
              <span
                className={styles.detailItem}
                onClick={onShow}
                style={{ cursor: 'pointer', color: '#4169e1' }} // Add some styling to indicate it's clickable
              >
                Startups
              </span>
              <div className={styles.separator} aria-hidden="true" />
              <span className={styles.detailItem}>Blogs</span>
            </div>
          </div>
          <div className={styles.actionsColumn}>
            <div className={styles.actionButtons}>
              <button className={styles.actionButton}>Update</button>
              <button className={styles.actionButton}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryContent;