import { Outlet } from "react-router-dom";
import "./StudentLayout.css";

import React from 'react'
import Sidebar from "../StudentPages/StudentComponents/StudentDashBoardComponents/Sidebar";

const UserLayout = () => {
    return (
        <main className="StudentLayout">
            <Sidebar />
            <div style={{width: "100%"}}>
            <div className="stu-dash-main">
                <div className="stu-dash-header PrimaryColor1">
                    <div>
                        <h2>Welcome back, John!</h2>
                        <p>Always stay updated in your student portal</p>
                    </div>
                    <div className='stu-dash-header-div2'>
                        <img src="./StudentPortal.png  " alt="A Sad Happy Student" />
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", padding: "20px", overflow: "hidden" }}>

                <Outlet />
            </div>
            </div>
        </main>
    )
}
export default UserLayout