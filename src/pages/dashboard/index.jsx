import { useContext } from "react";
import { Header } from "../../components/header";
import { ProductList } from "../../components/productList";
import { userContext } from "../../providers/userContext";
import style from "./style.module.scss";

export const Dashboard = () => {

    const { user } = useContext(userContext);

    return (
        <>
            <div className={style.dashboard}>
                <div>
                    <Header />
                    <div className={style.line}></div>
                    <main>
                        <section className={style.dashboard__user}>
                            <h2 className="title1">Olá, {user.name}</h2>
                        </section>
                        <div className={style.line}></div>
                        <section className={style.dashboard__info}>
                            <ProductList />
                        </section>
                    </main>
                </div>
            </div>
        </>
    )

}