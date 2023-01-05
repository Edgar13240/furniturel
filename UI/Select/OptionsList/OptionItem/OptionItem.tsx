import React, {FC} from "react";
import styles from "../../Select.module.scss";
import {OptionModel} from "@models/interfaces";

interface OptionItemModel extends OptionModel {
    setValue: React.Dispatch<OptionModel>
}

export const OptionItem: FC<OptionItemModel> = (
    {
        label,
        value,
        setValue
    }
) => {

    const handleChoose = (event: any) => {
        let element = event.target;
        let value = element.getAttribute("data-value");
        setValue({
            label,
            value
        });
    };

    return (
        <li
            className={styles.OptionItem}
            onClick={handleChoose}
            data-value={value}
        >
            {label}
        </li>
    )
}