"use client"
import styles from "./page.module.css"
import { useEffect, createRef } from "react"

export default function Display({
    playing, 
    setRangePos, 
    inputPos, 
    setPlaying, 
    videoUrl 
}: {
    playing: boolean, 
    setRangePos: React.Dispatch<React.SetStateAction<number>>, 
    inputPos: number, 
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    videoUrl: string    
}) {
    //refs
    let videoRef = createRef<HTMLVideoElement>();

    //playing useEffect: play/pause
    useEffect(() => {
        if (videoRef.current === null) {
            return;
        }

        //update video state
        if (playing === false) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }, [playing]);

    //inputPos useEffect: update video time
    useEffect(() => {
        if (videoRef.current === null) {
            return;
        }

        //if video duration is NaN: stop
        if (isNaN(videoRef.current.duration)) {
            return;
        }
        //calculate video time
        let videoTime = (inputPos * 0.01) * videoRef.current.duration;
        //update video time
        videoRef.current.currentTime = videoTime;
    }, [inputPos])

    return <div className={styles.display}>
        <video
            ref={videoRef}

            //Time Update: Update range pos with vid pos
            onTimeUpdate={() => {
                if (videoRef.current === null) {
                    return;
                }

                //calculate rangePos
                let newRangePos = videoRef.current.currentTime / videoRef.current.duration;
                newRangePos *= 100;
                //update rangePos
                setRangePos(newRangePos);
            }}

            //Video Ended: Set playing to false
            onEnded={() => {
                //update playing
                setPlaying(false);
            }}
            
            //Video Clicked: Toggle Playing
            onClick={() => {
                //toggle playing
                setPlaying((playing) => {
                    return !playing;
                })
            }}>

            {/* Source */}
            <source src={videoUrl} type="video/mp4" />
            
            {/* Error Msg */}
            Error: Cannot load video.
        </video>
    </div>
}