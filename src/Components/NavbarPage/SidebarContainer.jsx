import React from 'react';
import styles from './SidebarContainer.module.css';
import NavBar from './NavBar';

const menuItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f1667d81f2ddd1541d7484a504fb16dcdc0485ac866a45a6f1b3e40a6c7694af?apiKey=168c23e5e966425abe0e4b54edde3b42&', text: 'Learning Path' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2fc33ba5c4831c280daf6dcfb5eab0f000fdba52a91074d89a12a383e333797a?apiKey=168c23e5e966425abe0e4b54edde3b42&', text: 'Privacy Policy' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/17142a922f80edc4404d2a724a8a5d1d8c590d2ebfa14ca08dd8b008557f0742?apiKey=168c23e5e966425abe0e4b54edde3b42&', text: 'About' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/476c1bba2a9409474508c95e0a3a3276e50b3d3277ceb924c85faf8888149c7d?apiKey=168c23e5e966425abe0e4b54edde3b42&', text: 'Settings' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3aae4f6eb6fce994885f50654ae3ced1b64b2ad02e2deb085a8de411a339e8ea?apiKey=168c23e5e966425abe0e4b54edde3b42&', text: 'Logout' }
];

function SidebarContainer() {
  return (
    <nav className={styles.sidebarContainer}>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49b687c8529cd8566cb72fd16bc1563eb06fd07058bdc4f9fe453d2b6dc6a1e8?apiKey=168c23e5e966425abe0e4b54edde3b42&" className={styles.userAvatar} alt="User avatar" />
          <div className={styles.userName}>JOHN DOE</div>
        </div>
        <button className={styles.menuItem}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db090145385190b1f039ae03886abe39384e168891f2d4b38df02ac269430f09?apiKey=168c23e5e966425abe0e4b54edde3b42&" alt="" className={styles.menuIcon} />
          <span className={styles.menuText}>Dashboard</span>
        </button>
      </div>
      <div className={styles.divider} />
      <ul className={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </nav>
  );
}

export default SidebarContainer;