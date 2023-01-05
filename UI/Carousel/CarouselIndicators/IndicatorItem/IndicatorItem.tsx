import {FC, useContext} from "react";
import styles from "../CarouselIndicators.module.scss";
import {CarouselContext} from "@core/context";

interface IndicatorItemModel {
    index: number
}

export const IndicatorItem: FC<IndicatorItemModel> = (
    {
        index
    }
) => {

    let {setPage, page} = useContext(CarouselContext);

    let isActiveCondition = page === index;

    const handlePageChange = () => setPage(index);

    return (
        <button
            aria-checked={isActiveCondition}
            onClick={handlePageChange}
            role={"button"}
            className={styles.IndicatorItem}
        ></button>
    )
}