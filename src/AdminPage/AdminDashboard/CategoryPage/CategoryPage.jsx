import React, { useState } from "react";
import styles from './CategoryPage.module.css';
import Header from './Header';
import CategoryContent from './CategoryContent';
import AdditionalCategory from './AdditionalCategory';
import StartupPage from "./StartupPage/StartupPage";

function CategoryPage() {
   const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
  return (
    <main className={styles.categoryPage}>
      <Header />
      <h1 className={styles.categoryTitle}>Category</h1>
      <CategoryContent onShow={handleShow} />
      { show && ( 
          <StartupPage />
      )}
      { !show && (
        <>
            <AdditionalCategory title="IR" />
            <AdditionalCategory title="AR" />
        </>
      )}
    </main>
  );
}

export default CategoryPage;