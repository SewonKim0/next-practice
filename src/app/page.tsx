"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
  // state: test
  const [text, setText] = useState(undefined)
  // effect: fetch test
  useEffect(() => {
    // setup connection
    let connection = axios.create({ baseURL: "" })
    
    // TEST
    connection.post("/api")
      .then((res) => {
        console.log("RECEIVED: ")
        console.log(res.data)
      })
  }, [])

  return (
    <div className={styles.container}>
      <textarea className={styles.doc}></textarea>
    </div>
  )
}
