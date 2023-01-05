import React, {FC, ReactNode, useEffect, useState} from "react";
import styles from "./Select.module.scss";
import OptionsList from "@ui/Select/OptionsList";
import {OptionModel} from "@models/interfaces";
import cs from "classnames";
import Typography from "@ui/Typography";

interface SelectModel {
    children: ReactNode,
    options: any[],
    setValue: React.Dispatch<OptionModel>,
    value: OptionModel | null,
    className?: string,
    label?: string,
    inValid?: boolean,
    keyName: string,
    labelName: string
}

export const Select: FC<SelectModel> = (
    {
        children,
        options,
        setValue,
        className,
        value,
        inValid,
        label,
        keyName,
        labelName
    }
) => {

    let [isValid, setIsValid] = useState<boolean>(true);
    let [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(!open);

    const handleBlur = () => {
        if (!value?.value) setIsValid(false);
    }

    useEffect(() => {
        setOpen(false);
    }, [value]);

    useEffect(() => {
        if (value?.value && !isValid) setIsValid(true);
    }, [value]);

    return (
        <div className={cs({
            [styles.Select]: true,
            [className as string]: className
        }, "p-relative w-100")}>
            {
                label
                &&
                <Typography className={styles.Select__label}>{label}</Typography>
            }
            <button
                onBlur={handleBlur}
                onClick={handleOpen}
                className={cs({
                    [styles.Select__field]: true,
                    [styles.Select__error]: !value?.value ? !isValid || inValid : false
                }, "d-flex align-center justify-content-between w-100 rounded")}
            >
                <Typography>
                    {!value?.value ? children : value.label}
                </Typography>
            </button>
            {
                open
                &&
                <div className={cs({
                    [styles.Select__list]: true,
                    [styles.Select__labelList]: label,
                })}>
                    <OptionsList
                        keyName={keyName}
                        labelName={labelName}
                        setValue={setValue}
                        options={options}
                    />
                </div>
            }
        </div>
    )
}