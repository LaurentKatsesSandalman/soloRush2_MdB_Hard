"use client";
import { useReducer } from 'react';
import { useState, useEffect } from "react";
//import { useAppContext } from "../../context/AppContext";
import styles from "./GameComponent.module.css";
import type {
    Chapter,
    Contrainte,
    Exit,
    PotentialExitInterface,
} from "../../libs/types/types";
import {StoryButton} from "../Buttons/StoryButton";
import ActionDiv from "../ActionDiv/ActionDiv";
import { story1 } from "@/data/data";
import { exitReducer, initialState } from '@/libs/utils/exitReducer';

export function GameComponent() {
    const [state, dispatch] = useReducer(exitReducer, initialState)

    const potentialExit:[Exit]|[Exit, Exit]| [Exit, Exit, Exit] = state.chapter.exits

    const potentialExitEmpty = [
        {
            index: 1,

            exit_desc: "desc1",
            exit_id: 2,
        },
        {
            index: 2,

            exit_desc: "desc2",
            exit_id: 2,
        },
        {
            index: 3,

            exit_desc: "desc3",
            exit_id: 2,
        },
    ];

    // const [currentChapterID, setCurrentChapterID] = useState<number>(1);
    // const [currentChapter, setCurrentChapter] = useState<Chapter>(firstChapter);
    // const [potentialExit, setPotentialExit] =
    //     useState<PotentialExitInterface[]>(potentialExitEmpty);


    // useEffect(() => {
    //     setCurrentChapter(story1.find((chapter)=>chapter.chapter_id=currentChapterID))
    // }, [currentChapterID]);

    // useEffect(() => {
    //     const checkConstraints = async () => {
    //         const potentialExitStart = [
    //             {
    //                 index: 1,
    //                 exit_contrainte: currentChapter.exit1_contrainte,
    //                 exit_desc: currentChapter.exit1_desc,
    //                 exit_id: currentChapter.exit1_id,
    //                 exit_ztarget: currentChapter.exit1_ztarget,
    //             },
    //             {
    //                 index: 2,
    //                 exit_contrainte: currentChapter.exit2_contrainte,
    //                 exit_desc: currentChapter.exit2_desc,
    //                 exit_id: currentChapter.exit2_id,
    //                 exit_ztarget: currentChapter.exit2_ztarget,
    //             },
    //             {
    //                 index: 3,
    //                 exit_contrainte: currentChapter.exit3_contrainte,
    //                 exit_desc: currentChapter.exit3_desc,
    //                 exit_id: currentChapter.exit3_id,
    //                 exit_ztarget: currentChapter.exit3_ztarget,
    //             },
    //         ];

    //         setPotentialExit(potentialExitStart);

    //         setPotentialExit((prev) =>
    //             prev.filter((exit) => exit.exit_id !== null),
    //         );

    //         const bannedID: number[] = [];

    //         for (const exit of potentialExitStart) {
    //             if (exit.exit_id && exit.exit_contrainte) {
              
    //                     const exitConstraint: Contrainte = exit.exit_contrainte

                        
    //                         if (
    //                             exitConstraint.minlife &&
    //                             life < exitConstraint.minlife
    //                         )
    //                             bannedID.push(exit.index);
    //                         if (
    //                             exitConstraint.maxlife &&
    //                             life > exitConstraint.maxlife
    //                         )
    //                             bannedID.push(exit.index);
    //                         if (
    //                             exitConstraint.mincom &&
    //                             comPoints < exitConstraint.mincom
    //                         )
    //                             bannedID.push(exit.index);
    //                         if (
    //                             exitConstraint.maxcom &&
    //                             comPoints > exitConstraint.maxcom
    //                         )
    //                             bannedID.push(exit.index);
    //                         if (
    //                             exitConstraint.object &&
    //                             !inventory.includes(
    //                                 exitConstraint.object,
    //                             )
    //                         )
    //                             bannedID.push(exit.index);
                        

    //             }
    //         }

    //         setPotentialExit((prev) =>
    //             prev.filter((exit) => !bannedID.includes(exit.index)),
    //         );
    //     };

    //     checkConstraints();
    // }, [currentChapter]);

    return (
        <>
            <h2>RETRO MdB</h2>
            <div className={styles.storydiv}>
                <div className={styles.descdiv}>
                    <p>{state.chapter.chapter_desc}</p>
                </div>
                <div className={styles.buttondiv}>
                    {potentialExit.map((exit, index) => ( // à filtrer
                        <StoryButton
                            key={index}
                            state={state}
							dispatch={dispatch}
							exit={exit}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.actiondiv}>
                <ActionDiv state={state}/>
            </div>
        </>
    );
}
