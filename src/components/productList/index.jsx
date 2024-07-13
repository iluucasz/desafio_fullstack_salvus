import { useContext } from 'react';
import btnPlus from "../../assets/btnPlus.svg";
import { productContext } from "../../providers/productContext";
import { CreateProductModal } from "../modal/createProduct";
import { EditProductModal } from "../modal/editProductModal";
import { ProductCard } from "./product";
import style from "./style.module.scss";

export const ProductList = () => {

    const { visibleModal, setVisibleModal, editList } = useContext(productContext);

    return (
        <div className={style.container__ProductList}>

            <section>
                <div className={style.container__ProductTitle}>
                    <h3 className="title1">Seus Produtos</h3>
                    <button onClick={() => { setVisibleModal(true) }}><img src={btnPlus} alt="adicionar tarefa" /></button>
                </div>

                {
                    visibleModal ? <CreateProductModal /> : null
                }
                {
                    editList ? <EditProductModal /> : null
                }
                <ProductCard />
            </section>

        </div>
    );
}