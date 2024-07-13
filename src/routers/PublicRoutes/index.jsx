import { useContext } from "react";
import { userContext } from "../../providers/userContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
    const { user } = useContext(userContext);

    return !user ? <Outlet /> : <Navigate to={"/dashboard"} />
}