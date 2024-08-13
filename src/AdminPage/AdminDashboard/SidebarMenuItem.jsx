import React from 'react';
import styles from './AdminDashboard.module.css';

function SidebarMenuItem({ icon, text }) {
  return (
    <div className={styles.menuItem}>
      <img src={icon} alt="" className={styles.menuIcon} />
      <span className={styles.menuText}>{text}</span>
    </div>
  );
}

export default SidebarMenuItem;