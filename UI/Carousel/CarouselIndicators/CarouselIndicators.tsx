import {FC, useContext} from "react";
import styles from "./CarouselIndicators.module.scss";
import IndicatorItem from "@ui/Carousel/CarouselIndicators/IndicatorItem";
import {CarouselContext} from "@core/context";
import cs from "classnames";

interface CarouselIndicatorsModel {
    containerClassName?: string
}

export const CarouselIndicators: FC<CarouselIndicatorsModel> = (
    {
        containerClassName
    }
) => {

    let {pagesCount} = useContext(CarouselContext);

    return (
        <div className={cs({
            [styles.CarouselIndicators]: true,
            [containerClassName as string]: containerClassName
        }, "d-flex align-center justify-content-center")}>
            {
                pagesCount
                ?
                new Array(pagesCount)
                    .fill(() => 0)
                    .map((value, index) => {
                        return (
                            <IndicatorItem
                                key={index}
                                index={index}
                            />
                        )
                    })
                    :
                    null
            }
        </div>
    )
}