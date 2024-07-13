/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { productContext } from "../../../providers/productContext";
import style from "./style.module.scss";

export const ProductCard = () => {
    const { productList, setEditList, productDelete, fetchProducts } = useContext(productContext);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const formatDate = (dateString) => {
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };

        const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', dateOptions);
        const formattedTime = new Date(dateString).toLocaleTimeString('pt-BR', timeOptions);

        return `${formattedDate} às ${formattedTime}`;
    };

    return (
        <li className={style.container__ProductCard}>
            {productList.map((product) => (
                <div key={product.id} className={style.productCard__item}>
                    <h3 className="title2">{product.name}</h3>
                    <div>
                        <p className="headline red">Descrição: {product.description}</p>
                        <p className="headline red">Preço: R$ {product.price} Reais</p>
                        <p className="headline red">Criado em {formatDate(product.createdAt)}</p>
                        <p className="headline red">Atualizado em {formatDate(product.updatedAt)}</p>

                        <div className={style.productCard__actions}>
                            <button aria-label="editar" onClick={() => setEditList(product)}>
                                <MdEdit className="headline red" />
                            </button>
                            <button aria-label="deletar" onClick={() => productDelete(product.id)}>
                                <MdDelete className="headline red" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </li>
    );
};
