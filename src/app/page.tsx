"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react"

export default function Home() {
  const [getRes, setGetRes] = useState<string | null>(null)
  const [postRes, setPostRes] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api", { method: "GET" })
      .then((res) => {
        return res.text()
      })
      .then((text) => {
        setGetRes(text)
      })

    fetch("/api", { method: "POST", body: "SEWONKIM0" })
      .then((res) => {
        return res.text()
      })
      .then((text) => {
        setPostRes(text)
      })
  }, [])

  return <div>
    {getRes === null ? <p> Loading... </p> :
    <p> GET: {getRes} </p>}

    {postRes === null ? <p> Loading... </p> :
    <p> POST: {postRes} </p>}
  </div>
}