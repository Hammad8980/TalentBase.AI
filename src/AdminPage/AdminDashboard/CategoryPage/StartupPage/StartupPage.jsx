import React from "react";
import styles from "../CategoryPage.module.css";

function StartupPage({ onShow }) {
  return (
    <section className={styles.StartupContent}>
      <h5 className={styles.catergoryType}> 1) Startup Information Here</h5>
      <div className={styles.categoryDetails}>
        <div className={styles.startupDetailsWrapper}>
          <div className={styles.actionsColumn}>
            <div className={styles.actionButtons}>
              <button className={styles.actionButton}>Approve</button>
              <button className={styles.actionButton}>Reject</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartupPage;
