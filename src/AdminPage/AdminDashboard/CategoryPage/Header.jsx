import React from "react";
import styles from './CategoryPage.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.logoColumn}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd03cae7b8525b509b032673c89571a3edd66f4201425a543b81bce789afd5a1?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42" className={styles.logo} alt="Company logo" />
          </div>
          <div className={styles.searchColumn}>
            <input type="search" placeholder="Search" className={styles.searchInput} aria-label="Search" />
          </div>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userAvatar} aria-hidden="true" />
        <span className={styles.userName}>Adam</span>
      </div>
    </header>
  );
}

export default Header;