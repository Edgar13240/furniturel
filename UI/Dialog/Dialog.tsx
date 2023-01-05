import {Dispatch, FC, ReactNode} from "react";
import styles from "./Dialog.module.scss";
import Backdrop from "@ui/Backdrop";
import Typography from "@ui/Typography";
import Button from "@ui/Button";
import cx from "classnames";
import cs from "classnames";
import CrossIcon from "@assets/icons/CrossIcon";

interface DialogModel {
    title: string,
    open: boolean,
    setOpen: Dispatch<boolean>,
    view?: "fullscreen" | "half",
    children: ReactNode
}

export const Dialog: FC<DialogModel> = (
    {
        title,
        open,
        setOpen,
        children,
        view
    }
) => {

    const handleClose = () => setOpen(false);

    return (
        open
            ?
            <>
                {view != "fullscreen" ? <Backdrop/> : null}
                <div
                    className={cs(styles.Dialog, "p-fixed top-0 left-0 w-100 h-100")}
                >
                    <div className={cx({[styles.Dialog__content]: true}, "p-absolute", styles[view || "half"])}>
                        <div className={cs(styles.Dialog__header, "top-0 left-0 p-sticky d-flex align-center justify-content-between")}>
                            <Typography
                                size={"fs-24"}
                                color={"black"}
                                weight={"bold"}
                            >
                                {title}
                            </Typography>
                            <Button
                                className={styles.Dialog__close}
                                color={"white"}
                                variant={"contained"}
                                onClick={handleClose}
                            >
                                <div className={"d-flex align-center justify-content-center"}>
                                    <CrossIcon fill={"#9A1414"} />
                                </div>
                            </Button>
                        </div>
                        <div className={styles.Dialog__body}>
                            {children}
                        </div>
                    </div>
                </div>
            </>
            :
            null
    )
}