import {Dispatch, FC} from "react";
import styles from "../Dialog.module.scss";
import Button from "@ui/Button";
import cs from "classnames";

interface DialogFooterModel {
    setOpen: Dispatch<boolean>,
    submitAction: string,
    handleSubmit: any
}

export const DialogFooter: FC<DialogFooterModel> = (
    {
        setOpen,
        submitAction,
        handleSubmit
    }
) => {

    const handleClose = () => setOpen(false);

    return (
        <div className={cs(styles.Dialog__footer, "d-flex align-center justify-content-end")}>
            <Button
                onClick={handleClose}
                variant={"outlined"}
            >
                Cancel
            </Button>
            <Button
                onClick={handleSubmit}
                variant={"contained"}
            >
                {submitAction}
            </Button>
        </div>
    )
}