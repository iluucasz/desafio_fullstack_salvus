import logo from "../../assets/product.png";
import { LoginForm } from "../../components/form/loginForm";
import pageStyles from "../../style/modules/pageBox.module.scss";

export const Home = () => {
    return (
        <>
            <main className={pageStyles.pageBox}>
                <div>
                    <figure>
                        <img src={logo} alt="Logo de produto" />
                    </figure>
                    <LoginForm />
                </div>
            </main>
        </>
    )
}