import {ChangeEvent, FC} from "react";
import {Helpers} from "@common/helpers";

interface TextareaModel {
    value: any,
    setValue: any,
    onChangeCallback?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void,
    disabled?: boolean,
    placeholder?: string,
    name?: string
}

export const Textarea: FC<TextareaModel> = (
    {
        value,
        setValue,
        onChangeCallback,
        placeholder,
        disabled,
        name
    }
) => {

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let {target} = event;
        Helpers.changeInstanceKeyValue(value, setValue, target.value, name);
        if (onChangeCallback) onChangeCallback(event, value);
    }

    return (
        <textarea
            name={name}
            className={"w-100 rounded"}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleChange}
        />
    )
}