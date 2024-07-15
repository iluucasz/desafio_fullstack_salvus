import { useContext } from "react";
import { Header } from "../../components/header";
import { ProductList } from "../../components/productList";
import { userContext } from "../../providers/userContext";
import style from "./style.module.scss";
import { productContext } from "../../providers/productContext";
import loading_product from "../../assets/loading_product.gif";

export const Dashboard = () => {

    const { user } = useContext(userContext);
    const { productList } = useContext(productContext);

    return (
        <>
            <div className={style.dashboard}>
                <div>
                    <Header />
                    <div className={style.line}></div>
                    <main>
                        <section className={style.dashboard__user}>
                            <h2 className="title1">Olá {user.name}, Seja bem vindo !</h2>
                        </section>
                        <div className={style.line}></div>
                        <section className={style.dashboard__info}>
                            {
                                productList ? <ProductList /> : <img src={loading_product} height={80} width={80} />
                            }
                        </section>
                    </main>
                </div>
            </div>
        </>
    )

}