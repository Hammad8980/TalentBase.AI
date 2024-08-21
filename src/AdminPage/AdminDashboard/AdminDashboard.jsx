import React from 'react';
import styles from './AdminDashboard.module.css';
import SidebarMenuItem from './SidebarMenuItem';
import StatItem from './StatItem';
import InstructorAvatar from './InstructorAvatar';
import { format } from 'date-fns';

const menuItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa8eb16b0e57c2bd07d87dbe35685586c3275b2da3eaf85d2ccfba267df5fb9b?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42', text: 'Notifications' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9eba9274128d2f9dd28a6c89ddb193edfad050f80da4344c924306926e3a85dd?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42', text: 'Updates' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/810fe96464291b6fb1d223a04fd3575f0c46467a7d2870fbdfb2562da84d323b?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42', text: 'Payment' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/878758c4aaef7bd3f09a77941b8631a33ff57c0236447141b8dae5880d53125d?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42', text: 'Settings' },
];

const stats = [
  { title: 'Enrolled Startups' },
  { title: 'Enrolled Industries' },
  { title: 'Enrolled Academias' },
  { title: 'Enrolled Students' },
];

function AdminDashboard() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'do MMMM, yyyy');
  return (
    <div className={styles.adminDashboard}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <h2 className={styles.adminTitle}>ADMIN PORTAL</h2>
            <div className={styles.categoryWrapper}>
              <div className={styles.categoryIcon}>
                <div className={styles.iconRow}>
                  <div className={styles.iconDot} />
                  <div className={styles.iconDot} />
                </div>
                <div className={styles.iconRow}>
                  <div className={styles.iconDot} />
                  <div className={styles.iconDot} />
                </div>
              </div>
              <span className={styles.categoryText}>Category</span>
            </div>
            {menuItems.map((item, index) => (
              <SidebarMenuItem key={index} icon={item.icon} text={item.text} />
            ))}
            <div className={styles.logoutWrapper}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/043ee5c58e90d1ecf12fa9a6216da8501e2b2df621edebf35841739289a968fd?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42" alt="" className={styles.menuIcon} />
              <span className={styles.menuText}>Logout</span>
            </div>
          </div>
        </aside>
        <main className={styles.mainContent}>
          <section className={styles.welcomeSection}>
            <div className={styles.welcomeContent}>
              <div className={styles.container}>
                <div className={styles.welcomeText}>
                  <time dateTime="2024-12-25">{formattedDate}</time>
                  <h1 className={styles.welcomeHeading}>Welcome Adam!</h1>
                  <p className={styles.welcomeMessage}>
                    You are welcome to your Admin portal, stay updated!
                  </p>
                </div>
                <img src="./adminportal.png" alt="User profile" className={styles.userImage} />
              </div>
            </div>
          </section>
          <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <StatItem key={index} title={stat.title} />
              ))}
            </div>
            </section>
          <section className={styles.chartSection}>
            <div className={styles.textContainer}>
              <h2 className={styles.sectionTitle}>Courses</h2>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/211566cfcf735addd3a697a130ac12524b97c73b74261ed40a9b7fe6e8818827?placeholderIfAbsent=true&apiKey=168c23e5e966425abe0e4b54edde3b42" alt="Chart" className={styles.chartImage} />
            </div>
            <div className={styles.container2}>
              <h2 className={styles.instructorsTitle}>Course Instructors</h2>
              <div className={styles.instructorsList}>
                <div className={styles.instructorGrid}>
                  <InstructorAvatar className="item1"/>
                  <InstructorAvatar className="item2"/>
                </div>
                <div className={styles.instructorGrid}>
                  <InstructorAvatar className="item3"/>
                  <InstructorAvatar className="item4"/>
                </div>
                <a href="#" className={styles.seeAllLink}>See All &gt;</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;