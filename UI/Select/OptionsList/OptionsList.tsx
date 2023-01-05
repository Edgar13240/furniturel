import React, {FC} from "react";
import {OptionModel} from "@models/interfaces";
import OptionItem from "@ui/Select/OptionsList/OptionItem";

interface OptionsListModel {
    options: any[],
    setValue: React.Dispatch<OptionModel>,
    labelName: string,
    keyName: string
}

export const OptionsList: FC<OptionsListModel> = (
    {
        options,
        setValue,
        labelName,
        keyName
    }
) => {
    return (
        <ul>
            {
                options.map(option => {

                    let label = option[labelName];
                    let value = option[keyName];

                    return (
                        <OptionItem
                            key={value}
                            setValue={setValue}
                            label={label}
                            value={value}
                        />
                    )
                })
            }
        </ul>
    )
}