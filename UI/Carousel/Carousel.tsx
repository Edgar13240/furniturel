import {Dispatch, FC, ReactNode} from "react";
import {CarouselContext} from "@core/context";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControl from "./CarouselControl";
import cs from "classnames";

interface CarouselModel {
    page: number,
    setPage: Dispatch<number>,
    pagesCount: number,
    containerClassName?: string,
    children: ReactNode
}

export const Carousel: FC<CarouselModel> = (
    {
        page,
        setPage,
        pagesCount,
        children,
        containerClassName
    }
) => {
    return (
        <CarouselContext.Provider value={{
            page,
            setPage,
            pagesCount
        }}>
            <div className={cs({
                [containerClassName as string]: containerClassName
            })}>
                <div className={"p-relative d-flex align-center"}>
                    <CarouselControl />
                    {children}
                </div>
                <CarouselIndicators/>
            </div>
        </CarouselContext.Provider>
    )
}