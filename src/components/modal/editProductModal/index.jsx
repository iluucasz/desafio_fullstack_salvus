import { useContext } from "react";
import { useForm } from "react-hook-form";
import { productContext } from "../../../providers/productContext";
import { InputCart } from "../forms/input";
import style from "./style.module.scss";

export const EditProductModal = () => {
    const { setEditList, editList, productUpdate } = useContext(productContext);

    const { handleSubmit, register, formState: { errors } } = useForm({});

    const submit = (data) => {

        const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
            if (value) acc[key] = value;
            return acc;
        }, {});

        if (Object.keys(filteredData).length > 0) {
            productUpdate(editList.id, filteredData);
        }

        setEditList(null);
    };

    return (
        <div role="dialog" className={style.container__Modal}>
            <form onSubmit={handleSubmit(submit)} className={style.container__BoxModal}>
                <div className={style.container__ModalTitle}>
                    <h3 className="title2">Editar produto</h3>
                    <button type="button" onClick={() => { setEditList(null); }} className="paragraph grey">X</button>
                </div>

                <div className={style.container__ModalCart}>
                    <InputCart
                        label="Nome"
                        placeholder="Nome do Produto"
                        {...register("name")}
                    />

                    <InputCart
                        label="Descrição"
                        placeholder="Descrição do Produto"
                        {...register("description")}
                    />

                    <InputCart
                        label="Preço"
                        placeholder="Preço do Produto"
                        inputMode="numeric"
                        {...register("price", {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Insira um valor válido",
                            },
                        })}
                    />

                    {errors.price && <p className="headline red">{errors.price.message}</p>}

                    <button type="submit" className="btn">Salvar alterações</button>
                </div>
            </form>
        </div>
    );
};
