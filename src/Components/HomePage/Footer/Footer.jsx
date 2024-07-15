import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.logo}>
            <span className={styles.logoText}>TALENTBASE</span>
            <span className={styles.logoDot}>.AI</span>
          </div>
          <p className={styles.slogan}>lorem ipsum</p>
          <form className={styles.subscribeForm}>
            <label htmlFor="emailInput" className={styles.visuallyHidden}>
              Enter your email
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="emailInput"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitButton}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82bea2c24624aec83b7f465f3f7dd6459b56a1974408d3a52263051296213050?apiKey=168c23e5e966425abe0e4b54edde3b42&"
                  alt="Submit"
                  className={styles.submitIcon}
                />
              </button>
            </div>
          </form>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Support</h3>
          <p className={styles.contactInfo}>Islamabad, Pakistan</p>
          <p className={styles.contactInfo}>xxx@gmail.com</p>
          <p className={styles.contactInfo}>+92-xxx-xxxxxxx</p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Account</h3>
          <a href="#" className={styles.footerLink}>
            My Account
          </a>
          <a href="#" className={styles.footerLink}>
            Login / Register
          </a>
          <a href="#" className={styles.footerLink}>
            Shop
          </a>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Quick Link</h3>
          <a href="#" className={styles.footerLink}>
            Enterprise
          </a>
          <a href="#" className={styles.footerLink}>
            Students
          </a>
          <a href="#" className={styles.footerLink}>
            About
          </a>
          <a href="#" className={styles.footerLink}>
            Blog
          </a>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Download App</h3>
          <div className={styles.appStoreLinks}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?apiKey=168c23e5e966425abe0e4b54edde3b42&"
              alt="App Store"
              className={styles.appStoreIcon}
            />
            <div className={styles.appStoreButtons}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0c4f8ff57a979b3caa891b857a02830ebaa92eda2d977f39b3e346649b074d?apiKey=168c23e5e966425abe0e4b54edde3b42&"
                alt="Google Play"
                className={styles.appStoreButton}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb5a185b96bf9134265129800c6f271375cf3fe7e88af740014058d11d06b6e?apiKey=168c23e5e966425abe0e4b54edde3b42&"
                alt="Apple App Store"
                className={styles.appStoreButton}
              />
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?apiKey=168c23e5e966425abe0e4b54edde3b42&"
                alt="Facebook"
              />
            </a>
            <a href="#" className={styles.socialLink}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bfe4d1e496238fe63f9b6acb36aa833bef33a5341be34eb7a0faf27231d69f6?apiKey=168c23e5e966425abe0e4b54edde3b42&"
                alt="Twitter"
              />
            </a>
            <a href="#" className={styles.socialLink}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?apiKey=168c23e5e966425abe0e4b54edde3b42&"
                alt="Instagram"
              />
            </a>
            <a href="#" className={styles.socialLink}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?apiKey=168c23e5e966425abe0e4b54edde3b42&"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d09f3ebfeaa89759192c49b7a32b350c2e58c223dddeefa3c68645aa6a9e312?apiKey=168c23e5e966425abe0e4b54edde3b42&"
          alt=""
          className={styles.copyrightIcon}
        />
        <p className={styles.copyrightText}>
          Copyright 2024. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
