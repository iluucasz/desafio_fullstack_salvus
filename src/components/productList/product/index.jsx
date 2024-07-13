/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { productContext } from "../../../providers/productContext";
import style from "./style.module.scss";

export const ProductCard = ({ title, status }) => {
    const { setEditList, productDelete } = useContext(productContext);

    return (

        <li className={style.container__ProductCard} >
            <div>
                <h3 className="title2">{title}</h3>
            </div>

            <div>
                <p className="headline grey">{status}</p>

                <button aria-label="editar" onClick={() => { setEditList() }}>
                    <MdEdit />
                </button>

                <button aria-label="deletar" onClick={() => productDelete()}>
                    <MdDelete />
                </button>
            </div>
        </li>

    )
}