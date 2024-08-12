import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    if (auth?.role?.find(Role => allowedRoles.includes(Role))) {
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
