import { ActionDispatch } from "react";
import styles from "./StoryButton.module.css";
import {
    Exit,
} from "@/libs/types/types";
import { ExitAction } from "@/libs/utils/exitReducer";

interface StoryButtonProps {
    dispatch: ActionDispatch<[action: ExitAction]>;
    exit: Exit;
}

export function StoryButton({ dispatch, exit }: StoryButtonProps) {

    async function handleOnClick() {
        dispatch({ type: "EXIT", payload: exit });
    }

    return (
        <>
            <button className={styles.exitbutton} onClick={handleOnClick}>
                {exit.desc}
            </button>
        </>
    );
}
