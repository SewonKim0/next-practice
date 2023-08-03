"use client"
import styles from "./page.module.css"
import { BiCaretRightCircle, BiCaretLeft, BiCaretRight, BiAdjust, BiArrowBack } from "react-icons/bi"
import { useEffect, createRef } from "react"

function Footer(
    { setPlaying, rangePos, setInputPos }:
    { setPlaying: React.Dispatch<React.SetStateAction<boolean>>, rangePos: number, setInputPos: React.Dispatch<React.SetStateAction<number>> }) {
    //ref: <input> range
    let inputRef = createRef<HTMLInputElement>();

    //rangePos useEffect: update <input> range
    useEffect(() => {
        //update
        if (inputRef.current === null) {
            return;
        }
        inputRef.current.value = rangePos.toString()
    }, [rangePos])

    return <div className={styles.footer}>
        {/* Controls Container */}
        <div className={styles["controls-container"]}>
            {/* Album 5 */}
            <a
                href="https://www.youtube.com/watch?v=3FUCWGE8GGU&list=PLK8AjScya4-uJSXUlQTUrLZeGUgXQM4SD&index=3"
                className={styles.album}
            >
                <button>
                    Album 5
                </button>
            </a>

            <div>
                {/* Left */}
                <BiCaretLeft
                    className={styles.left}
                    onClick={() => {
                        if (inputRef.current === null) {
                            return;
                        }

                        //decrement input pos 10%
                        setInputPos(parseInt(inputRef.current.value) - 10);
                    }}
                />

                {/* Play */}
                <BiCaretRightCircle
                    className={styles.play}
                    onClick={() => {
                        //update playing
                        setPlaying((playing) => {
                            return !playing;
                        });
                    }} 
                />

                {/* Right */}
                <BiCaretRight
                    className={styles.right}
                    onClick={() => {
                        if (inputRef.current === null) {
                            return;
                        }

                        //increment input pos 10%
                        setInputPos(parseInt(inputRef.current.value) + 10);
                    }}
                />
            </div>

            {/* Back */}
            <a
                href="https://sewonkim0.github.io/SewonKim/"
                className={styles.back}
            >
                <BiArrowBack />
            </a>
        </div>

        {/* Input */}
        <input
            ref={inputRef}
            type="range"
            defaultValue="0"

            //Input Change: Update input pos by user input
            onChange={() => {
                if (inputRef.current === null) {
                    return;
                }

                //update inputPos
                setInputPos(parseInt(inputRef.current.value));
            }}
        ></input>
    </div>
}

export default Footer;