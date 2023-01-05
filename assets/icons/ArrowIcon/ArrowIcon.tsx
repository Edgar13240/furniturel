import {FC} from "react";
import {VectorIconModel} from "@models/interfaces";

export const ArrowIcon: FC<VectorIconModel> = ({fill}) => {
    return (
        <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M23.4832 8.48975L12.9875 18.9854L23.4832 29.4811" stroke={fill || "#9C1311"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}