import DashboardData from './StudentComponents/StudentDashBoardComponents/DashBoardData';
import { Route, Routes } from 'react-router-dom';
import "./StudentPages.css";

function StudentDashboard() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<DashboardData />} />
        </Route>
      </Routes>
    </>
  );
}

export default StudentDashboard;
