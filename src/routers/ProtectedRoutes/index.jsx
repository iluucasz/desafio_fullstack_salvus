import { useContext } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { userContext } from '../../providers/userContext';

export const ProtectRoutes = () => {
    const { user } = useContext(userContext);

    return user ? <Outlet /> : <Navigate to="/" />
}