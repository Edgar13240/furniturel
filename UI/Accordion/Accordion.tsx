import {FC, ReactNode, useState} from "react";
import styles from "./Accordion.module.scss";
import cs from "classnames";
import CrossIcon from "@assets/icons/CrossIcon";

let MAIN_COLOR = "#9A1414";

interface AccordionModel {
    title: string,
    children: ReactNode
}

export const Accordion: FC<AccordionModel> = (
    {
        title,
        children
    }
) => {

    let [isShow, setShow] = useState<boolean>(false);

    let colorCondition = isShow ? MAIN_COLOR : "";

    const handleShow = () => setShow(!isShow);

    return (
        <div aria-checked={isShow} className={styles.Accordion}>
            <div
                className={cs({
                    [styles.Accordion__header]: true
                }, "w-100 d-flex align-center justify-content-between")}
                onClick={handleShow}
            >
                <p className={styles.Accordion__title}>{title}</p>
                <div className={styles.Accordion__cross}>
                    <CrossIcon fill={colorCondition} />
                </div>
            </div>
            {
                isShow
                &&
                <div className={styles.Accordion__body}>
                    {children}
                </div>
            }
        </div>
    )
}