import {Dispatch} from "react";

export interface CarouselContextModel {
    page: number,
    setPage: Dispatch<number>,
    pagesCount: number
}