import React, { useState } from "react";
import styles from './CategoryPage.module.css';
import Header from './Header';
import CategoryContent from './CategoryContent';
import AdditionalCategory from './AdditionalCategory';
import StartupPage from "./StartupPage/StartupPage";
import AllBlog from "../../../Components/BlogPage/AllBlogs";

function CategoryPage() {
   const [visibleComponent, setVisibleComponent] = useState(null);

   const handleShowStartup = () => {
       setVisibleComponent(visibleComponent === 'startup' ? null : 'startup');
   }

   const handleShowBlog = () => {
       setVisibleComponent(visibleComponent === 'blog' ? null : 'blog');
   }

  return (
    <main className={styles.categoryPage}>
      <Header />
      <h1 className={styles.categoryTitle}>Category</h1>
      <CategoryContent onShowCategories={handleShowStartup} onShowBlogs={handleShowBlog} />
      
      {visibleComponent === 'startup' && <StartupPage />}
      {visibleComponent === 'blog' && <AllBlog />}
      
      {visibleComponent === null && (
        <>
            <AdditionalCategory title="IR" />
            <AdditionalCategory title="AR" />
        </>
      )}
    </main>
  );
}

export default CategoryPage;
