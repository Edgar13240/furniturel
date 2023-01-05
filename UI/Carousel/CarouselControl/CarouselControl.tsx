import {FC, useContext} from "react";
import styles from "./CarouselControl.module.scss";
import ArrowIcon from "@assets/icons/ArrowIcon";
import cs from "classnames";
import {CarouselContext} from "@core/context";

export const CarouselControl: FC = () => {

    const {
        setPage,
        page,
        pagesCount
    } = useContext(CarouselContext);

    const prevButtonDisabledCondition = page === 0;
    const nextButtonDisabledCondition = page === pagesCount - 1;

    const handlePrev = () => setPage(page - 1);
    const handleNext = () => setPage(page + 1);

    return (
        <div className={cs(styles.CarouselControl, "w-100 p-absolute d-flex align-center justify-content-center")}>
            <button
                disabled={prevButtonDisabledCondition}
                onClick={handlePrev}
                className={cs(styles.CarouselControl__button, styles.CarouselControl__prev, "br-50 d-flex align-center justify-content-center")}
            >
                <ArrowIcon />
            </button>
            <button
                disabled={nextButtonDisabledCondition}
                onClick={handleNext}
                className={cs(styles.CarouselControl__button, styles.CarouselControl__next, "br-50 d-flex align-center justify-content-center")}
            >
                <div className={styles.CarouselControl__nextIcon}>
                    <ArrowIcon />
                </div>
            </button>
        </div>
    )
}