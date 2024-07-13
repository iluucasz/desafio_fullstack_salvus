import btnPlus from "../../assets/btnPlus.svg";
import style from "./style.module.scss";

export const ProductList = () => {

    return (
        <div className={style.container__ProductList}>

            <div className={style.container__ProductTitle}>
                <h3 className="title1">Product</h3>
                <button><img src={btnPlus} alt="adicionar tarefa" /></button>
            </div>
            <ul >
            </ul>

        </div>
    );
}