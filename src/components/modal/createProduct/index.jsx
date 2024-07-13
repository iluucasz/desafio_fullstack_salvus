import { useContext } from "react";
import { useForm } from "react-hook-form";
import { productContext } from "../../../providers/productContext";
import { InputCart } from "../forms/input";
import style from "./style.module.scss";

export const CreateProductModal = () => {

    const { addProduct, setVisibleModal } = useContext(productContext);

    const { handleSubmit, register } = useForm();

    const submit = (payLoad) => {
        addProduct(payLoad);
        setVisibleModal(false);
    }

    return (
        <div role="dialog" className={style.container__Modal}>
            <form onSubmit={handleSubmit(submit)} className={style.container__BoxModal}>

                <div className={style.container__ModalTitle}>
                    <h3 className="title2">Cadastrar Produto</h3>
                    <button type="button" onClick={() => { setVisibleModal(false) }} className="paragraph grey">X</button>
                </div>

                <div className={style.container__ModalCart}>
                    <InputCart
                        label="Nome"
                        placeholder="Digite o nome"
                        id="title"
                        {...register("title")}
                        required
                    />

                    <button type="submit" className="btn">Cadastrar Produto</button>
                </div>
            </form>

        </div>
    )
}