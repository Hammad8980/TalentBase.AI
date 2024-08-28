import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth, setAuth } = useAuth();
    const location = useLocation();
    const [loading, setLoading] = useState(true); // Add a loading state to prevent premature redirection

    useEffect(() => {
        const CheckRole = async () => {
            const role = localStorage.getItem('userRole');

            if (role) {
                await setAuth({ role });
                console.log("role set again", role);
            }
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }

        CheckRole();
    }, [setAuth]);


    if (loading) {
        return (
            <div class="hourglassBackground">
                <div class="hourglassContainer">
                    <div class="hourglassCurves"></div>
                    <div class="hourglassCapTop"></div>
                    <div class="hourglassGlassTop"></div>
                    <div class="hourglassSand"></div>
                    <div class="hourglassSandStream"></div>
                    <div class="hourglassCapBottom"></div>
                    <div class="hourglassGlass"></div>
                </div>
            </div>
        );
    }

    if (allowedRoles.includes(auth?.role)) {
        return <Outlet />;
    } else {
        if (auth?.email) {
            return <Navigate to="/unauthorized" state={{ from: location }} replace />;
        } else {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
    }
}

export default RequireAuth;
