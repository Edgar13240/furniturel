import {Dispatch, FC, useState} from "react";
import styles from "./Rating.module.scss";
import cs from "classnames";

interface RatingModel {
    rating: number,
    containerClassName?: string,
    setRating?: Dispatch<number>
}

export const Rating: FC<RatingModel> = (
    {
        rating,
        setRating,
        containerClassName
    }
) => {

    const [hover, setHover] = useState(0);

    const ariaCheckedCondition = setRating ? "true" : "false";

    const classNameCondition = (index: number) => {
        if (index <= (hover || rating)) {
            return styles.Star__active
        }

        return styles.Star__inActive;
    }

    return (
        <div className={cs({
            [containerClassName as string]: containerClassName
        })}>
            {[...Array(5)].map((star, index) => {
                index += 1;

                const setRatingHandler = () => {
                    if (setRating) setRating(index);
                };

                const setValueInHover = () => setHover(index);
                const setValueInLeave = () => setHover(rating);

                return (
                    <button
                        aria-checked={ariaCheckedCondition}
                        type="button"
                        key={index}
                        className={cs(classNameCondition(index), styles.Star)}
                        onClick={setRatingHandler}
                        onMouseEnter={setRating && setValueInHover}
                        onMouseLeave={setRating && setValueInLeave}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    )
}