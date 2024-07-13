/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const { state } = useLocation();

    const pathname = window.location.pathname;

    const navigate = useNavigate();

    const userLogin = async (payLoad, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("", payLoad);
            setUser(data.user)
            toast.success("Usuário logado com Sucesso!");
            localStorage.setItem("@token", data.token);
            navigate(state?.lastRoute ? state.lastRoute : pathname);
        } catch (error) {
            if (error.response?.data.message == "Incorrect email / password combination") {
                toast.error("Email ou senha incorreto")
            }
        } finally {
            setLoading(false);
            reset()
        }
    }

    const userRegister = async (payLoad, setLoading, reset) => {
        try {
            setLoading(true);
            await api.post("", payLoad);
            toast('Conta criada com sucesso');
            navigate("/");
        } catch (error) {
            toast(error.response.data.message)
        } finally {
            setLoading(false);
            reset();
        }
    }

    useEffect(() => {
        const autoLogin = async () => {
            const token = localStorage.getItem("@token");
            try {
                if (token) {
                    setLoading(true)
                    const response = await api.get("", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(response.data);
                    navigate(pathname);
                }
            } catch (error) {
                toast.error(error);
            }
            finally {
                setLoading(false);
            }
        }
        autoLogin();
    }, [])

    const userLogout = () => {
        localStorage.removeItem("@token");
        setUser(null);
        navigate("/");
    }

    return (
        <userContext.Provider value={{ user, setUser, userLogin, userLogout, navigate, userRegister, loading }} >
            {children}
        </userContext.Provider >
    )
}