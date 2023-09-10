"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react"

interface PersonType {
  "name": string;
  "age": number;
}

export default function Home() {
  const [postRes, setPostRes] = useState<PersonType[] | null>(null)

  useEffect(() => {
    fetch("/api", { method: "POST", body: "sewonkim" })
      .then((res) => {
        console.log("POST: " + res.status)
        return res.json()
      })
      .then((json) => {
        setPostRes(json)
      })
  }, [])

  return <div>
    {postRes === null ? <p> Loading... </p> :
    <p> POST: {postRes[0].age} </p>}
  </div>
}