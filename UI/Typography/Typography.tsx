import {FC, ReactNode} from "react";
import cs from "classnames";
import styles from "./Typography.module.scss";

interface TypographyModel {
    size?: "fs-14" | "fs-16" | "fs-18" | "fs-24" | "fs-32" | "fs-86",
    color?: "main" | "black" | "white" | "secondary",
    weight?: "regular" | "medium" | "bold",
    children: ReactNode,
    className?: string
}

export const Typography: FC<TypographyModel> = (
    {
        size,
        color,
        weight,
        children,
        className
    }
) => {
    return (
        <p className={cs({
            [className as string]: className
        }, styles[size || "fs-16"], styles[color || "black"], styles[weight || "regular"])}>
            {children}
        </p>
    )
}