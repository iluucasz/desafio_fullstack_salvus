import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { RegisterPage } from "../pages/registerPage";
import { Dashboard } from "../pages/dashboard";
import { ProtectRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { ErrorPage } from "../pages/ErrorPage";

export const RouterMain = () => {

    return (
        <Routes>

            <Route element={<PublicRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<ProtectRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )

}