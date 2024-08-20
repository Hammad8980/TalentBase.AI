// eslint-disable-all
import Home from './Components/HomePage/Home';
import Startups from './Components/StartupsPage/Startups';
import Services from './Components/ServicesPage/Services';
import Blog from './Components/BlogPageMini/Blog';
import TNSFS from './Components/TNSFS';
import Contact from './Components/ContactPage/Contact';
import LearningStreams from './Components/HomePage/WhatWeDo/LearningStreams';
import SignUp from './SignUpPage/SignUp';
import LogIn from './LogInPage/LogIn';
import StudentPortal from './StudentPages/StudentPortal';
import StudentStartups from './StudentPages/StudentStartups';
import StudentBlogEditor from './StudentPages/StudentBlogEditor';
import StudentBlogs from './StudentPages/StudentBlogs';
import AcademiaDashBoard from './Components/AcademiaPages/AcademiaDashBoard';
import IndustryDashBoard from './Components/IndustryPages/IndustryDashBoard';
import Missing from './Components/Missing';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth';
import UserLayout from './Layouts/UserLayout';
import StudentLayout from './Layouts/StudentLayout'

function App() {
  const Roles = {
    "Admin": "admin",
    "Student": "student",
    "Academia": "academia",
    "Industry": "industry"
  };
  return (
    <main className='App'>
      <Routes>
        {/* Routes for Unauthorized User */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tnsfs" element={<TNSFS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learningstream" element={<LearningStreams />} />
        </Route>

        {/* Routes for Student */}
        <Route element={<StudentLayout />}>
          <Route path="/studentDashboard/*" element={<StudentPortal />} />
          <Route path="/studentstartups" element={<StudentStartups />} />
          <Route path="/studentblogeditor" element={<StudentBlogEditor />} />
          <Route path="/studentblogs" element={<StudentBlogs />} />
          <Route path="/blogsexplore" element={<Blog />} />
          <Route path="/studentservices" element={<Services />} />
        </Route>

        {/* Routes for Academia*/}
        <Route element={<RequireAuth allowedRoles={[Roles.Academia]} />}>
          <Route path="/academiaDashboard" element={<AcademiaDashBoard />} />
        </Route>

        {/* Routes for Industry*/}
        <Route element={<RequireAuth allowedRoles={[Roles.Industry]} />}>
          <Route path="/industryDashboard" element={<IndustryDashBoard />} />
        </Route>


        {/* Public Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </main>

  );
}

export default App;
