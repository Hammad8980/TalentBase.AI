import React from "react";
import styles from "../CategoryPage.module.css";

function StartupPage({ onShow }) {
  return (
    <section className={styles.StartupContent}>
      <div className={styles.categoryDetails}>
        <div className={styles.detailsWrapper}>
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
