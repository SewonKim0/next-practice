"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react"

interface PersonType {
  "name": string;
  "age": number;
}

export default function Home() {
  const [postRes, setPostRes] = useState<PersonType | null>(null)

  useEffect(() => {
    setTimeout(() => {
      fetch("/api", { method: "POST", body: "sewonkim" })
      .then((res) => {
        console.log("POST: " + res.status)
        return res.json()
      })
      .then((json) => {
        setPostRes(json)
      })
    }, 3000)
  }, [])

  return <div>
    {postRes === null ? <p> Loading... </p> :
    <p> POST: {postRes.age} </p>}
  </div>
}