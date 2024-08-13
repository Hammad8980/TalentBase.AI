import Navbar from './Components/NavbarPage/NavBar';
import Home from './Components/HomePage/Home';
import Startups from './Components/StartupsPage/Startups';
import Students from './Components/Students';
import About from './Components/About';
import Blog from './Components/BlogPage/Blog';
import TNSFS from './Components/TNSFS';
import Contact from './Components/ContactPage/Contact';
import LearningPathDetails from './Components/HomePage/WhatWeDo/LearningPathDetails';
import SignUp from './SignUpPage/SignUp';
import LogIn from './LogInPage/LogIn';
<<<<<<< Updated upstream
import AdminDashboard from './AdminPage/AdminDashboard/AdminDashboard';
=======
import StudentDashBoard from './StudentPages/StudentDashBoard';
>>>>>>> Stashed changes
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
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tnsfs" element={<TNSFS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learningPathDetails" element={<LearningPathDetails />} />
        </Route>

        {/* Routes for Student */}
        <Route element={<StudentLayout />}>
          <Route path="/studentDashboard" element={<StudentDashBoard />} />
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
