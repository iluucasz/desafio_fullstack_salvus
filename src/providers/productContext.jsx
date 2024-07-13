/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const productContext = createContext({});

export const ProductProvider = ({ children }) => {
    const token = localStorage.getItem("@token");

    const [productList, setProductList] = useState([]);
    const [editList, setEditList] = useState(null);
    const [visibleModal, setVisibleModal] = useState(false);


    const fetchProducts = useCallback(async () => {
        try {
            if (token) {
                const { data } = await api.get("/product", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProductList(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }, [token]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const addProduct = async (payLoad) => {
        try {
            const { data } = await api.post("/product", payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Produto adicionado com sucesso.");
            fetchProducts();
        } catch (error) {
            if (error.message === "") {
                toast.error("Já existe uma tarefa com este nome");
            }
        }
    };

    const productUpdate = async (id, payLoad) => {
        try {
            const { data } = await api.patch(`/product/${id}`, payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Produto atualizado com sucesso");
            fetchProducts();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const productDelete = async (id) => {
        try {
            await api.delete(`/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Produto excluído com sucesso!");
            fetchProducts();
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <productContext.Provider
            value={{
                visibleModal,
                setVisibleModal,
                setEditList,
                editList,
                addProduct,
                productUpdate,
                productDelete,
                productList,
                fetchProducts,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
