import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userContext } from "../../../providers/userContext";
import { Input } from "../input";
import { loginFormSchema } from "./loginForm.schema";
import style from "./style.module.scss";

export const LoginForm = () => {

    const [loading, setLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const { userLogin } = useContext(userContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginFormSchema),
    })

    const submit = async (payLoad) => {
        setLoading(true);
        try {
            await userLogin(payLoad, setLoading, reset);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={style.container__login}>
            <div className={style.form__title}>
                <h2 className="title2">Login</h2>
            </div>

            <Input
                label="Email"
                type="email"
                id="email"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Senha"
                type={isHidden ? "password" : "text"}
                id="password"
                {...register("password")}
                error={errors.password}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
            />

            <div className={`${style.form__btn}`}>
                <button type="submit" className="btn title2" disabled={loading}>
                    {loading ? "Carregando..." : "Entrar"}
                </button>
                <span className="headline grey">Ainda não possui uma conta?</span>
                <Link to="/register" className="btn grey title2">Cadastre-se</Link>
            </div>

        </form>
    )
}