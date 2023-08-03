"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react"

interface VideoType {
  "title": string;
  "composer": string;
  "imgPath": string;
}

export default function Home() {
  const [postRes, setPostRes] = useState<VideoType | null>(null)

  useEffect(() => {
    fetch("/api", { method: "POST", body: "winter-snow" })
      .then((res) => {
        console.log("POST: " + res.status)
        return res.json()
      })
      .then((json) => {
        setPostRes(json)
      })
  }, [])

  return <div>
    {getRes === null ? <p> Loading... </p> :
    <p> GET: {getRes} </p>}

    {postRes === null ? <p> Loading... </p> :
    <p> POST: {postRes.title} </p>}
  </div>
}