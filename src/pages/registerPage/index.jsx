import { RegisterForm } from "../../components/form/registerForm";
import { Header } from "../../components/header";
import pageStyles from "../../style/modules/pageBox.module.scss";
import style from "./style.module.scss";

export const RegisterPage = () => {
    return (
        <>
            <div className={style.container__RegisterPage}>
                <div>
                    <Header />
                    <main className={pageStyles.pageBox}>
                        <div>
                            <RegisterForm />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}