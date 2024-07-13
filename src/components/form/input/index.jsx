/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import style from "../loginForm/style.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const Input = forwardRef(({ error, label, id, isHidden, setIsHidden, ...rest }, ref) => {
    return (
        <>
            {
                id == "password" ?
                    <div className={style.form__login}>
                        <label htmlFor={id} className="headline">{label}</label>
                        <div >
                            <input ref={ref} {...rest} className="boxInput headline" />
                            <button onClick={() => setIsHidden(!isHidden)} type="button" className={style.hidden}>
                                {isHidden ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                            </button>
                            {error ? <span className="headline red">{error.message}</span> : null}
                        </div>
                    </div >

                    : <div className={style.form__login} >
                        <label htmlFor={id} className="headline">{label}</label>
                        <input ref={ref} {...rest} className="boxInput headline" />
                        {error ? <span className="headline red">{error.message}</span> : null}
                    </div >
            }
        </>
    )
});