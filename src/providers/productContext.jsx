/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const productContext = createContext({});

export const ProductProvider = ({ children }) => {

    const token = localStorage.getItem("@token");

    const [productList, setProductList] = useState([]);
    const [editList, setEditList] = useState(null);

    const [visibleModal, setVisibleModal] = useState(false);

    const addProduct = async (payLoad) => {
        try {
            const { data } = await api.post("", payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProductList([...productList, data]);
            toast.success("Produto adicionado com sucesso.");
        } catch (error) {
            if (error.message == "") {
                toast.error("Já existe uma tarefa com este nome")
            }
        }
    }

    const viewProduct = async () => {
        try {
            const { data } = await api.get("", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return data;
        } catch (error) {
            toast.error(error);
        }
    };

    const productUpdate = async (payLoad) => {
        try {
            const { data } = await api.patch("", payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Produto atualizado com sucesso")
            setProductList(data);
        } catch (error) {
            toast.error(error);
        }
    }

    const productDelete = async () => {
        try {
            await api.delete("", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Produto excluído com sucesso!");
        } catch (error) {
            toast.success(error)
        }
    }

    return (
        <productContext.Provider value={
            {
                visibleModal,
                setVisibleModal,
                setEditList,
                editList,
                addProduct,
                viewProduct,
                productUpdate,
                productDelete,
            }
        }>
            {children}
        </productContext.Provider>
    )
}