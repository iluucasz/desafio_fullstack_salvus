/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import style from "./style.module.scss";

export const InputCart = forwardRef(({ label, ...rest }, ref) => {
    return (
        <div className={style.container__FormName}>
            <label className="headline">{label}</label>
            <input {...rest} ref={ref} className="boxInput paragraph" />
        </div>
    );
});
