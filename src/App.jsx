import Navbar from './Components/NavbarPage/NavBar';
import Home from './Components/HomePage/Home';
import Startups from './Components/StartupsPage/Startups';
import Students from './Components/Students';
import About from './Components/About';
import Blog from './Components/BlogPage/Blog';
import TNSFS from './Components/TNSFS';
import Contact from './Components/ContactPage/Contact';
import LearningPathDetails from './Components/HomePage/WhatWeDo/LearningPathDetails';
import SignUp from './SignUpPage/SignUpSelectRole';
import SignUpStudent from './SignUpPage/StudentSignUp';
import LogIn from './LogInPage/LogIn';
import StudentDashBoard from './Components/StudentPages/StudentDashBoard';
import AcademiaDashBoard from './Components/AcademiaPages/AcademiaDashBoard';
import IndustryDashBoard from './Components/IndustryPages/IndustryDashBoard';
import Missing from './Components/Missing';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth';
import Layout from './Layout';

function App() {
  const Roles = {
    "Admin": "admin",
    "Student": "student",
    "Academia": "academia",
    "Industry": "industry"
  };
  return (
    <main className='App'>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tnsfs" element={<TNSFS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learningPathDetails" element={<LearningPathDetails />} />
          <Route element={<RequireAuth allowedRoles={[Roles.Student]} />}>
            <Route path="/studentDashboard" element={<StudentDashBoard />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[Roles.Academia]} />}>
            <Route path="/academiaDashboard" element={<AcademiaDashBoard />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[Roles.Industry]} />}>
            <Route path="/industryDashboard" element={<IndustryDashBoard />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </main>

  );
}

export default App;
