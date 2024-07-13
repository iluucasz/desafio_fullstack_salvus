import { useContext } from "react";
import { useForm } from "react-hook-form";
import { productContext } from "../../../providers/productContext";
import { InputCart } from "../forms/input";
import style from "./style.module.scss";

export const EditProductModal = () => {

    const { setEditList, editList, productUpdate } = useContext(productContext);

    const { handleSubmit, register } = useForm(
        {
            values: {
                status: editList.status
            }
        }
    );

    const submit = (payLoad) => {
        productUpdate(payLoad)
        setEditList(null);
    }

    return (
        <div role="dialog" className={style.container__Modal}>
            <form onSubmit={handleSubmit(submit)} className={style.container__BoxModal}>

                <div className={style.container__ModalTitle}>
                    <h3 className="title2">Produto detalhes</h3>
                    <button type="button" onClick={() => { setEditList(null) }} className="paragraph grey">X</button>
                </div>

                <div className={style.container__ModalCart}>
                    <InputCart
                        label="Nome"
                        placeholder={editList.title}
                        id="title"
                        disabled={true}
                        register={register("title")}
                    />

                    <button type="submit" className="btn">Salvar alterações</button>
                </div>

            </form>
        </div>
    )
}