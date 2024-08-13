import { Outlet } from "react-router-dom";

import React from 'react'

const UserLayout = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}
export default UserLayout