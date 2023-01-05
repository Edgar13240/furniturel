import {FC} from "react";
import styles from "./Card.module.scss";
import cs from "classnames";

interface CardModel {
    image: string,
    title: string,
    creationDate: string,
    className?: string,
    onClick: () => void
}

export const Card: FC<CardModel> = (
    {
        image,
        title,
        className,
        creationDate,
        onClick
    }
) => {
    return (
        <div
            onClick={onClick}
            className={cs({
                [styles.Card]: true,
                [className as string]: className
            })}
        >
            <div className={cs({
                [styles.Card__image]: true
            }, "h-100 w-100")}>
                <img
                    loading={"lazy"}
                    src={image}
                    alt={"card-image"}
                />
            </div>
            <div className={styles.Card__body}>
                <p className={styles.Card__title}>{title}</p>
                <p className={styles.Card__date}>{creationDate}</p>
            </div>
        </div>
    )
}