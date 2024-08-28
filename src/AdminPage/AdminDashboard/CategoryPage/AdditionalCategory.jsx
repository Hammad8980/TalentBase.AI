import React from "react";
import styles from './CategoryPage.module.css';

function AdditionalCategory({ title }) {
  return (
    <section className={styles.additionalCategory}>
      <h2 className={styles.visuallyhidden}>{title} Category</h2>
      {title}
    </section>
  );
}

export default AdditionalCategory;