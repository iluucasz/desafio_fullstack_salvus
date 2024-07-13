import loadingIcon from "../assets/loading.svg";
import style from "./style.module.scss";

export const Loading = () => {

    return (
        <div className={style.container__loading}>
            <img src={loadingIcon} alt="carregando.." />
        </div>
    )

}