import {ChangeEvent, KeyboardEvent, Dispatch, FC} from "react";
import styles from "./TextField.module.scss";
import cs from "classnames";

interface TextFieldModel {
    onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void,
    setValue?: Dispatch<string>,
    disabled?: boolean,
    name: string,
    placeholder?: string,
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void,
    label?: string,
    containerClassName?: string,
    labelColor?: "white" | "black"
}

export const TextField: FC<TextFieldModel> = (
    {
        onChange,
        setValue,
        disabled,
        name,
        placeholder,
        onKeyPress,
        label,
        containerClassName,
        labelColor
    }
) => {

    let id = `textfield-${name}`;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let {value} = event.target;
        onChange(event, value);
        if (setValue) setValue(value);
    }

    return (
        <div className={cs({
            [containerClassName as string]: containerClassName
        }, "w-100 d-flex align-flex-start flex-column")}>
            {
                label
                &&
                <label
                    htmlFor={id}
                    className={cs({
                        [styles.TextField__label]: true
                    }, styles[labelColor || "black"])}
                >
                    {label}
                </label>
            }
            <input
                id={id}
                className={cs({
                    [styles.TextField__input]: true
                }, "rounded w-100")}
                onKeyPress={onKeyPress}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                type={"text"}
                onChange={handleChange}
            />
        </div>
    )
}