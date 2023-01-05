import {FC, ReactNode} from "react";
import cs from "classnames";
import styles from "./Button.module.scss";

interface ButtonModel {
    onClick: () => void,
    children: ReactNode,
    size?: "small" | "large",
    variant: "contained" | "outlined",
    color?: "main" | "white",
    disabled?: boolean,
    className?: string,
    type?: "submit" | "reset"
}

export const Button: FC<ButtonModel> = (
    {
        type,
        onClick,
        children,
        size,
        variant,
        disabled,
        className,
        color
    }
) => {
    return (
        <button
            name={variant}
            className={cs({
                [styles.Button]: true,
                [className as string]: className
            }, styles[size || "small"], styles[color || "main"], "rounded d-flex align-center justify-content-center w-100")}
            type={type || "button"}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}