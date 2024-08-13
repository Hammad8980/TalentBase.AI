import Navbar from '../Components/NavbarPage/NavBar';
import { Outlet } from "react-router-dom";

import React from 'react'

const UserLayout = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}
export default UserLayout