import {Dispatch} from "react";

export class Helpers {
    static typeOf = <TValue>(value: TValue) => typeof value;

    static changeInstanceKeyValue = <TValue>(value: TValue, setValue: Dispatch<TValue>, eventValue: any, keyValue?: string) => {
        if (Helpers.typeOf(value) === "string") {
            setValue(eventValue);
        } else if (keyValue && Helpers.typeOf(value) === "object") {
            setValue({
                ...value,
                [keyValue]: eventValue
            })
        }
    }
}
