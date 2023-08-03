"use client"
import styles from "./page.module.css"
import Header from "./Header/page"
import Display from "./Display/page"
import Footer from "./Footer/page"
import { useState, useEffect } from "react";

export interface VideoData {
  "title": string;
  "composer": string;
  "imgPath": string;
}

export default function Page({
  params
}: {
  params: { "video": string; } }
) {
  // state: whether video is playing (true) or paused (false)
  let [playing, setPlaying] = useState<boolean>(false)

  // state: position of <input type=range> horizontal slider (0-100)
  // when playing, rangePos is constantly updated to video's current time
  let [rangePos, setRangePos] = useState<number>(0)

  // state: updated on user input, changes both rangePos and video time
  let [inputPos, setInputPos] = useState<number>(0)

  // state: video url
  let [videoUrl, setVideoUrl] = useState<string | undefined>(undefined);
  // state: video data
  let [videoData, setVideoData] = useState<VideoData | undefined>(undefined);

  useEffect(() => {

    // fetch: preview video
    fetch("/api/preview", { method: "POST", body: params.video })
      .then((res) => {
        if (!res.ok) {
          alert(`Server Error: Unable to load video (code ${res.status})`)
          throw new Error(`Server Error: Unable to load video (error code ${res.status})`)
        }
        return res.blob()
      })
      .then((blob) => {
        let url = URL.createObjectURL(blob)
        setVideoUrl(url)
      })
  }, [])

  return (
    <div className={styles.page}>
      {/* Header */}
      <Header
        videoData={videoData}
      />

      {/* If videoUrl loaded: Display & Footer */}
      {videoUrl === undefined ? <p> Loading... </p> :
      <>
        <Display 
          playing={playing} 
          setRangePos={setRangePos}
          inputPos={inputPos}
          setPlaying={setPlaying}
          videoUrl={videoUrl}
        />

        <Footer 
          setPlaying={setPlaying} 
          rangePos={rangePos}
          setInputPos={setInputPos}
        />
      </>
      }
    </div>
  );
}