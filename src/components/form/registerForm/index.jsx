import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../../providers/userContext";
import { Input } from "../input";
import { registerFormSchema } from "./registerForm.schema";
import style from "./style.module.scss";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const [isHidden, setIsHidden] = useState(true);
    const [loading, setLoading] = useState(false);

    const { userRegister } = useContext(userContext);

    const submit = (payLoad) => {
        userRegister(payLoad, setLoading, reset);
    }

    return (
        <div className={style.container__register}>
            <div className={style.register__titles}>
                <h2 className="title2">Crie sua conta</h2>
                <span className="headline grey">Rapido e grátis, vamos nessa</span>
            </div>

            <form onSubmit={handleSubmit(submit)} className={style.container__form}>
                <Input
                    label="Name"
                    type="text"
                    id="name"
                    placeholder="Digite o seu nome"
                    {...register("name")}
                    error={errors.name}
                />

                <Input
                    label="Seu email"
                    type="email"
                    id="email"
                    placeholder="Digite o seu email"
                    {...register("email")}
                    error={errors.email}
                />

                <Input
                    label="Crie uma senha"
                    type={isHidden ? "password" : "text"}
                    id="password"
                    placeholder="Digite o seu password"
                    {...register("password")}
                    error={errors.password}
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                />

                <Input
                    label="Confirme a senha"
                    type="password"
                    id="againPassword"
                    placeholder="Confimar Senha"
                    {...register("againPassword")}
                    error={errors.againPassword}
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                />

                <div>
                    <button type="submit" disabled={loading} className="btn negative">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}




