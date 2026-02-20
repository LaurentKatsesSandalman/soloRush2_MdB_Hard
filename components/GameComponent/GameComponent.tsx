"use client";
import { useReducer } from "react";
import styles from "./GameComponent.module.css";
import type { Exit } from "../../libs/types/types";
import { StoryButton } from "../Buttons/StoryButton";
import ActionDiv from "../ActionDiv/ActionDiv";
import { exitReducer, initialState } from "@/libs/utils/exitReducer";

export function GameComponent() {
    const [state, dispatch] = useReducer(exitReducer, initialState);

    const bannedID: number[] = [];
	const inventoryCodes: string [] = state.inventory.map((item)=>item.code)

    for (const exit of state.chapter.exits) {
        if (exit.contrainte) {
            if( (exit.contrainte.minlife && state.life < exit.contrainte.minlife) ||
            
          (exit.contrainte.maxlife && state.life > exit.contrainte.maxlife) ||
               
            (exit.contrainte.mincom && state.comPoints < exit.contrainte.mincom) ||
               
             (exit.contrainte.maxcom && state.comPoints > exit.contrainte.maxcom) ||
                
            (
                exit.contrainte.object &&
                !inventoryCodes.includes(exit.contrainte.object.code))
            )
               { bannedID.push(exit.id);}
        }
    }

const potentialExit: Exit[] = state.chapter.exits.filter((exit)=>!bannedID.includes(exit.id))

    return (
        <>
            <h2 className={styles.h2}>RETRO MdB</h2>
            <div className={styles.storydiv}>
                <div className={styles.descdiv}>
                    <p>{state.chapter.chapter_desc}</p>
                </div>
                <div className={styles.buttondiv}>
                    {potentialExit.map(
                        (
                            exit,
                            index,
                        ) => (
                            <StoryButton
                                key={index}
                                dispatch={dispatch}
                                exit={exit}
                            />
                        ),
                    )}
                </div>
            </div>
            <div className={styles.actiondiv}>
                <ActionDiv state={state} />
            </div>
        </>
    );
}
